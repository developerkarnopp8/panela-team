import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
  IonItem,
  IonDatetime, 
  IonDatetimeButton,
  IonLabel
} from '@ionic/angular/standalone';
import { Subscription } from 'rxjs/internal/Subscription';
import { IRegisterNewInstancia } from './interface/IRegisterNewInstancia';
import { EventosInstanciaService } from 'src/app/shared/service/eventos.instancia.service';
import { EventosInstanciaStoreService } from 'src/app/shared/stores/eventos.instancias.store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-nova-instancia',
  templateUrl: './criar-nova-instancia.component.html',
  styleUrls: ['./criar-nova-instancia.component.scss'],
  imports: [
    IonButton, 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonModal, 
    IonTitle, 
    IonToolbar,
    FormsModule,
    IonItem,
    IonDatetime, 
    IonDatetimeButton, 
    IonLabel
  ],
})
export class CriarNovaInstanciaComponent  implements OnInit {
  presentingElement!: HTMLElement | null;
  subscription!: Subscription;
  event!: any;
  @ViewChild(IonModal) modal!: IonModal;
  constructor(

    private eventosInstanciaService: EventosInstanciaService,
    private eventosInstanciaStoreService: EventosInstanciaStoreService,  
    private router: Router,

  ) {}

  registrarNewInstancia: IRegisterNewInstancia = {
    date: '',
    startTime: '',
    endTime: '',
    isOpen: false
  };

  ngOnInit() {
    const eventoFromSession = sessionStorage.getItem('evento');
      if (eventoFromSession) {
        this.event = JSON.parse(eventoFromSession);
      }
    console.log('CriarNovaInstanciaComponent ngOnInit', this.event);
    
  }
  
  cadastrarInstancia(){
    const eventoFromSession = sessionStorage.getItem('evento');
    if (eventoFromSession) {
      this.event = JSON.parse(eventoFromSession);
    }
    this.subscription = this.eventosInstanciaService.createdNewInstanciaGame(this.registrarNewInstancia, this.event.id).subscribe(
      (res) => {
        this.eventosInstanciaStoreService.adicionarEventoInstancia(res); // Adiciona o evento criado ao store
        this.modal.dismiss(this.registrarNewInstancia);
      },
      (error) => {
        console.error(error);
      }
    );

  }

  updateDate(event: any) {
    this.registrarNewInstancia.date = event.detail.value;
  }

  updateStartTime(event: any) {
    this.registrarNewInstancia.startTime = event.detail.value;
  }

  updateEndTime(event: any) {
    this.registrarNewInstancia.endTime = event.detail.value;
  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    
  }
}
