import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HeaderComponent } from "./features/layout/header/header.component";
import { FooterComponent } from "./features/layout/footer/footer.component";
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/service/auth.service';
import { NavBarComponent } from "./features/components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, HeaderComponent, FooterComponent, CommonModule, NavBarComponent],
  template: `
    <ion-app>
    <ion-menu contentId="main-content" *ngIf="exibirMenu">
      <app-nav-bar ></app-nav-bar>
    </ion-menu>

      <app-header [currentUrl]="currentUrl"></app-header>

      <ion-router-outlet class="example-content"></ion-router-outlet>
      <app-footer [currentUrl]="currentUrl"></app-footer>
    </ion-app>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  currentUrl: string = '';
  exibirMenu: boolean = true;

  constructor(
    private router: Router,
    private authService : AuthService
  ) {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url; 
      this.exibirMenu = !['/login', '/iniciar', '/registrar'].includes(this.currentUrl);  
    });
  }

  ngOnInit() {
    // window.addEventListener('beforeunload', this.handleBeforeUnload);
  }
  
  ngOnDestroy() {
    // window.removeEventListener('beforeunload', this.handleBeforeUnload);
  }
  
  // handleBeforeUnload = (event: BeforeUnloadEvent) => {
  //   this.authService.logout(); // Chama o método de logout do AuthService
  //   // Aqui você pode salvar estado ou fazer um logout silencioso
  //   console.log('A aba ou navegador foi fechada ou recarregada');
  //   // Exemplo: salvar estado no localStorage ou notificar backend
  // };
  
  
}
