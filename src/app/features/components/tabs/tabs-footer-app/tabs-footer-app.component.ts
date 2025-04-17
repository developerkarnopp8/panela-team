import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonIcon,
  IonTabBar,
  IonTabButton,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { addCircleSharp, basketball, listCircleSharp } from 'ionicons/icons';
import { AuthService } from 'src/app/shared/service/auth.service';
@Component({
  selector: 'app-tabs-footer-app',
  templateUrl: './tabs-footer-app.component.html',
  styleUrls: ['./tabs-footer-app.component.scss'],
  imports: [
    IonIcon, 
    IonTabBar, 
    IonTabButton, 
  ],
})
export class TabsFooterAppComponent  implements OnInit {
  currentUrl: string = '';
  exibirModalCorreto: boolean = true;
  constructor(
    private router: Router,
    private authService : AuthService
  ) {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url; 
    });
    addIcons({ basketball, addCircleSharp, listCircleSharp });
  }

  ngOnInit() {}

  openModalNovo() {
    const modalEvent = document.getElementById('open-modal-novo-game') as HTMLIonModalElement | null;
    const modalEventInstancia = document.getElementById('open-modal-instancia') as HTMLIonModalElement | null;

    if (modalEvent && this.currentUrl === '/eventos') {
      console.log(modalEvent);
      modalEvent.present(); // Exibe o modal
    }

    if(modalEventInstancia && this.currentUrl === '/details'){
      modalEventInstancia.present(); // Exibe o modal
    }
}
}
