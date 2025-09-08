import { Component } from '@angular/core';
import { ProjectRoutingModule } from "../project-routing.module";
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  imports: [ProjectRoutingModule],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss'
})
export class ConfirmComponent {
    constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }

}
