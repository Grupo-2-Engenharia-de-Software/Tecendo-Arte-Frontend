import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { FooterComponent } from "../../../components/footer/footer.component";
import { HeaderComponent } from "../../../components/header/header.component";

@Component({
  selector: 'app-project-layout',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './project-layout.component.html',
  styleUrls: ['./project-layout.component.scss']
})
export class ProjectLayoutComponent {
  // Exemplo de estado compartilhado
  projectData = {
    name: '',
    description: ''
  };

  childActive = false;

  constructor(private router: Router) {
this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.childActive = this.router.url !== '/project';
      }
    });
  }
}