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

    const currentDate = new Date();
    this.registrarNewInstancia.date = currentDate.toISOString().split('T')[0];

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
    const timeValue = event.detail.value.includes('T') ? event.detail.value.split('T')[1] : event.detail.value;
    
    const [hours, minutes, seconds] = timeValue.split(':');
    const [year, month, day] = this.registrarNewInstancia.date.split('T')[0].split('-');

    const dateTime = new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes), Number(seconds || 0));
  
    if (!isNaN(dateTime.getTime())) {
      this.registrarNewInstancia.startTime = dateTime.toISOString();
    } else {
      console.error('Data inválida gerada', dateTime);
    }
  }
  
  updateEndTime(event: any) {
    const timeValue = event.detail.value.includes('T') ? event.detail.value.split('T')[1] : event.detail.value;
  
    const [hours, minutes, seconds] = timeValue.split(':');
    const [year, month, day] = this.registrarNewInstancia.date.split('T')[0].split('-');
    
    const dateTime = new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes), Number(seconds || 0));
  
    if (!isNaN(dateTime.getTime())) {
      
      this.registrarNewInstancia.endTime = dateTime.toISOString();
    } else {
      console.error('Data inválida gerada', dateTime);
    }
  }
  
  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    
  }
}
