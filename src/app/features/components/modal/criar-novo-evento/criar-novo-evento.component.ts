import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  ActionSheetController,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonDatetime, 
  IonDatetimeButton,
  IonLabel
} from '@ionic/angular/standalone';
import { IRegisterNewEvent } from './interface/IRegisterNewEvent';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { UsersEventoService } from 'src/app/shared/service/users.service';
import { EventosService } from 'src/app/shared/service/eventos.service';
import { EventosStoreService } from 'src/app/shared/stores/eventos.store.service';

@Component({
  selector: 'app-criar-novo-evento',
  templateUrl: './criar-novo-evento.component.html',
  styleUrls: ['./criar-novo-evento.component.scss'],
  imports: [
    IonButton, 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonModal, 
    IonTitle, 
    IonToolbar,
    FormsModule,
    IonInput,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonDatetime, 
    IonDatetimeButton, 
    IonLabel
  ],
})

export class CriarNovoEventoComponent  implements OnInit, OnDestroy {
  presentingElement!: HTMLElement | null;
  subscription!: Subscription;

  @ViewChild(IonModal) modal!: IonModal;
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private eventosService: EventosService,
    private eventosStore: EventosStoreService,  
  ) {}
    registrarNewEvent: IRegisterNewEvent = {
      eventName: '',
      type: '',
      startDateTime: '',
      endDateTime: '',  
      images:  [],
      description: '',
    };
  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  cadastrar(){
    this.subscription = this.eventosService.createdNewEventGame(this.registrarNewEvent).subscribe(
      (res) => {
        this.eventosStore.adicionarEvento(res); // Adiciona o evento criado ao store
        this.modal.dismiss(this.registrarNewEvent);
      },
      (error) => {
        console.error(error);
      }

    );
  }

  updateStartDateTime(event: any) {
    this.registrarNewEvent.startDateTime = event.detail.value;
  }

  updateEndtDateTime(event: any) {
    this.registrarNewEvent.endDateTime = event.detail.value;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
