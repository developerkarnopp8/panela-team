import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HeaderComponent } from "./features/layout/header/header.component";
import { FooterComponent } from "./features/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, HeaderComponent, FooterComponent],
  template: `
    <ion-app>
      <app-header [currentUrl]="currentUrl"></app-header>
        <ion-router-outlet class="example-content"></ion-router-outlet>
      <app-footer [currentUrl]="currentUrl"></app-footer>
    </ion-app>
  `
})
export class AppComponent {
  currentUrl: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;   
    });
  }
  
}
