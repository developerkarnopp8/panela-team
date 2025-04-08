import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./features/layout/header/header.component";
import { FooterComponent } from "./features/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <ion-app>
      <app-header></app-header>
        <ion-router-outlet class="example-content"></ion-router-outlet>
      <!-- <app-footer></app-footer> -->
    </ion-app>
  `
})
export class AppComponent {}
