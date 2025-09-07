import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isHomePage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkIfHomePage(this.router.url);
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.checkIfHomePage(event.url);
      });
  }

  private checkIfHomePage(url: string): void {
    this.isHomePage = url === '/';
  }

}