import { Component, Input, OnInit} from '@angular/core';
import { ProjectResponse } from '../../models/project.interface,';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-project',
  standalone: true, // Adicionei standalone para evitar warnings, caso esteja usando.
  imports: [ProgressBarComponent, CommonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent implements OnInit { // Implemente a interface OnChanges
  @Input() project!: ProjectResponse;
  imageUrl: string = '';


  ngOnInit(){
    this.construirImagem();
  }

  getPercentage(): number {
    const percentage = (this.project.valorArrecadado / this.project.meta) * 100;
    return Number(percentage.toFixed(2));
  }

  construirImagem() {
    const imagem = this.project.imagens[0];
    this.imageUrl = `data:${imagem.tipoMime};base64,${imagem.dadosImagemBase64}`;
  }

}