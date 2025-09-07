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

    let valor = input.value.replace(/[^\d.,]/g, '');
    valor = valor.replace(',', '.');
    input.value = valor ? `R$ ${valor}` : '';

    const numericValue = parseFloat(valor);
    this.form.get('meta')?.setValue(isNaN(numericValue) ? '' : numericValue, { emitEvent: false });
  }

  next() {
    const formValue = { ...this.form.value };

    this.projetoService.setData(formValue);
    this.router.navigate(['project/reward']);
  }

}
