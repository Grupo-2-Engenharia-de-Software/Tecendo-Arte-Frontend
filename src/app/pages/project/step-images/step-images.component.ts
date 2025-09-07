import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProjetoService } from '../../../services/projeto/projeto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-images',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './step-images.component.html',
  styleUrls: ['./step-images.component.scss']
})
export class StepImagesComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private projetoService: ProjetoService) {
    this.form = this.fb.group({
      imagens: this.fb.array([])
    });
    this.adicionarImagem();
  }

  get imagens(): FormArray {
    return this.form.get('imagens') as FormArray;
  }

  adicionarImagem() {
    this.imagens.push(this.fb.group({
      dadosImagemBase64: [''],
      descricao: [''],
      tipoMime: ['']
    }));
  }

  private toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = error => reject(error);
    });
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

next() {
  const projetoCompleto = this.projetoService.getData();
  if (!projetoCompleto) {
    console.error('Dados do projeto não encontrados!');
    return;
  }

  projetoCompleto.imagens = this.form.value.imagens
    .filter((img: any) => img.dadosImagemBase64)
    .map((img: any) => ({
      dadosImagemBase64: img.dadosImagemBase64,
      descricao: img.descricao,
      tipoMime: img.tipoMime
    }));

  this.projetoService.submitProject(projetoCompleto).subscribe({
    next: () => {
      this.projetoService.clearData();
      this.router.navigate(['/project/created']);
    },
    error: (err) => console.error('Erro ao enviar projeto:', err)
  });
}

}
