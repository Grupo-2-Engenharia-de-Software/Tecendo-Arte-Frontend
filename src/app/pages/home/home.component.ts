import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project/project.service';
import { ProjectResponse } from '../../models/project.interface';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, CardProjectComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: ProjectResponse[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (data: ProjectResponse[]) => {
        this.projects = data; 
      },
      
    });
    
  }
}