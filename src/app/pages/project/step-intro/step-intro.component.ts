import { Component } from '@angular/core'; import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; import { Router, RouterModule } from '@angular/router'; import { TipoArte } from '../../../models/tipo-arte'; import { CommonModule } from '@angular/common'; 
import { ProjetoService } from '../../../services/projeto/projeto.service';

@Component({
  selector: 'app-step-intro',
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './step-intro.component.html',
  styleUrl: './step-intro.component.scss' 
})
export class StepIntroComponent {
  form: FormGroup;
  tiposArte = Object.values(TipoArte);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private projetoService: ProjetoService
  ) {

    this.form = this.fb.group({
      nome: ['', Validators.required],
      tipoArte: ['', Validators.required],
      descricao: ['', Validators.required],
      meta: ['', Validators.required]
    });

    const dadosExistentes = this.projetoService.getData();
    if (dadosExistentes) {
      this.form.patchValue({
        nome: dadosExistentes.titulo,
        tipoArte: dadosExistentes.tipoArte,
        descricao: dadosExistentes.descricaoProjeto,
        meta: dadosExistentes.meta
      });
    }
  }

  formatCurrency(event: Event) {
    const input = event.target as HTMLInputElement;
    let valorLimpo = input.value.replace(/\D/g, '');
    let valorNumerico = parseFloat(valorLimpo) / 100;
    
    if (isNaN(valorNumerico)) {
      valorNumerico = 0;
    }

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    input.value = formatter.format(valorNumerico);
    this.form.get('meta')?.setValue(valorNumerico, { emitEvent: false });
  }

  next() {
    const formValue = { ...this.form.value };

    this.projetoService.setData({
      titulo: formValue.nome,
      tipoArte: formValue.tipoArte,
      descricaoProjeto: formValue.descricao,
      meta: formValue.meta
    });

    this.router.navigate(['project/reward']);
  }

}
