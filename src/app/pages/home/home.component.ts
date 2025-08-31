import { Component, HostListener, OnInit, ChangeDetectorRef } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { Project } from '../../models/project.interface,';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent,CardProjectComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  projectCards = new Array(10);

  mockProjects: Project[] = [
    {
      image: '../../assets/images/artesanato.jpg',
      title: 'Desenvolvimento de App de IA',
      description: 'Criação de um aplicativo móvel com inteligência artificial para otimizar o dia a dia de estudantes.',
      author: 'João Silva',
      tags: ['Tecnologia', 'IA', 'Mobile'],
      totalRaised: 12500.50,
      endDate: new Date('2025-12-31')
    },
    {
      image: '../../assets/images/artesanato.jpg',
      title: 'Plantação Sustentável',
      description: 'Projeto social para criar uma horta comunitária e educar sobre agricultura orgânica.',
      author: 'Maria Oliveira',
      tags: ['Sustentabilidade', 'Comunidade', 'Meio Ambiente'],
      totalRaised: 5200.00,
      endDate: new Date('2026-06-15')
    },
    {
      image: '../../assets/images/artesanato.jpg',
      title: 'Plantação Sustentável',
      description: 'Projeto social para criar uma horta comunitária e educar sobre agricultura orgânica.',
      author: 'Maria Oliveira',
      tags: ['Sustentabilidade', 'Comunidade', 'Meio Ambiente'],
      totalRaised: 5200.00,
      endDate: new Date('2026-06-15')
    }
  ];

}