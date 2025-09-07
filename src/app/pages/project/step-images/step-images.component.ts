import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProjetoService } from '../../../services/projeto/projeto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-images',
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './step-images.component.html',
  styleUrls: ['./step-images.component.scss']
})
export class StepImagesComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private projetoService: ProjetoService) {
    this.form = this.fb.group({
      imagens: this.fb.array([]),
    });
    this.adicionarImagem();
  }

  get imagens(): FormArray {
    return this.form.get('imagens') as FormArray;
  }

  adicionarImagem() {
    this.imagens.push(this.fb.group({
      dadosImagemBase64: ['', Validators.required],
      descricao: ['', Validators.required],
      tipoMime: ['', Validators.required]
    }));
  }

  async onFileChange(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const base64 = await this.toBase64(file);

    const imagemGroup = this.imagens.at(index);
    imagemGroup.patchValue({
      dadosImagemBase64: base64,
      tipoMime: file.type
    });
  }

  private toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = error => reject(error);
    });
  }

  next() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const projetoCompleto = this.projetoService.getData();
    projetoCompleto.imagens = this.form.value.imagens;

    this.projetoService.submitProject(projetoCompleto).subscribe({
      next: () => this.router.navigate(['/project/created']),
      error: (err) => console.error('Erro ao submeter o projeto', err)
    });
  }
}
