import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonIcon,
  IonTabBar,
  IonTabButton,
  ToastController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircleSharp, basketball, listCircleSharp } from 'ionicons/icons';

@Component({
  selector: 'app-tabs-footer-app',
  templateUrl: './tabs-footer-app.component.html',
  styleUrls: ['./tabs-footer-app.component.scss'],
  imports: [
    IonIcon, 
    IonTabBar, 
    IonTabButton, 
    RouterModule,
    CommonModule
  ],
})
export class TabsFooterAppComponent implements OnInit {

  currentUrl: string = '';

  constructor(

    private router: Router,
    private toastController: ToastController

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
      modalEvent.present();
    }

    if(modalEventInstancia && this.currentUrl === '/details'){
      modalEventInstancia.present();
    }
  }

  async presentToast(message: string, duration: number) {
    const toast = await this.toastController.create({
      message,
      duration,
      icon: 'basketball',
      position: 'bottom'
    });

    await toast.present();
  }

  isPast(endTime: string | Date): boolean {
    return new Date(endTime) < new Date();
  }

  navLisPlayers() {
    const evento = JSON.parse(sessionStorage.getItem('evento') || '{}');
    
    const gameAberto = Object.keys(evento).length > 0 ? evento?.instances.find((instancia: any) => instancia.isOpen && !this.isPast(instancia.endTime) ) : false;

    if (evento && Object.keys(evento).length > 0 && gameAberto) {
      this.router.navigate(['/players']);
      // this.router.navigate(['/players'], { state: { evento } });
      // sessionStorage.setItem('evento', JSON.stringify(evento));  
    }else {
      if(!evento || Object.keys(evento).length === 0) {
        this.presentToast('Escolha seu Game para jogar!', 3000);
        return;
      }else{
        this.presentToast('Todos os Games estão fechados! ', 3000);
        return;
      }
    }
  }
}
