import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HeaderComponent } from "./features/layout/header/header.component";
import { FooterComponent } from "./features/layout/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, HeaderComponent, FooterComponent, CommonModule],
  template: `
    <ion-app>

       <!-- ✅ MENU lateral global -->
       <ion-menu contentId="main-content" *ngIf="exibirMenu">
        <ion-header>
          <ion-toolbar color="tertiary">
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>This is the menu content.</p>
        </ion-content>
      </ion-menu> 

      <app-header [currentUrl]="currentUrl"></app-header>

      <ion-router-outlet class="example-content"></ion-router-outlet>
      <app-footer [currentUrl]="currentUrl"></app-footer>
    </ion-app>
  `
})
export class AppComponent {
  currentUrl: string = '';
  exibirMenu: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url; 
      this.exibirMenu = !['/login', '/iniciar', '/registrar'].includes(this.currentUrl);  

      console.log('currentUrl', this.currentUrl);
      console.log('exibirMenu', this.exibirMenu);
      
    });
  }
  
}
