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

  next() {
    const formValue = { ...this.form.value };
    formValue.meta = parseFloat(formValue.meta);

    this.projetoService.setData(formValue);
    this.router.navigate(['project/reward']);
  }

}
