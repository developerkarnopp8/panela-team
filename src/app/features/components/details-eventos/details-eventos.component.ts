import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonList,
  IonImg, 
  IonLabel, 
  IonNote, 
  IonToggle,
  IonContent,
  IonText,
  IonItem,
  IonButton
} from '@ionic/angular/standalone';
import { Subscription } from 'rxjs/internal/Subscription';
import { EventosInstanciaService } from 'src/app/shared/service/eventos.instancia.service';
@Component({
  selector: 'app-details-eventos',
  templateUrl: './details-eventos.component.html',
  styleUrls: ['./details-eventos.component.scss'],
  imports: [ 
    IonList, 
    IonImg, 
    IonLabel, 
    IonNote, 
    IonToggle, 
    IonContent, 
    IonText, 
    CommonModule, 
    IonItem, 
    IonButton
  ],
  standalone: true,
})
export class DetailsEventosComponent  implements OnInit, OnChanges {

  evento: any;
  subscription!: Subscription;

  constructor(
    private router: Router,
    private eventosInstanciaService: EventosInstanciaService,
  ) {}
  
  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state && navigation.extras.state['evento']) {
      this.evento = navigation.extras.state['evento'];
    } else {
      const eventoFromSession = sessionStorage.getItem('evento');
      if (eventoFromSession) {
        this.evento = JSON.parse(eventoFromSession);
      }
    }
  }

  isPast(endTime: string | Date): boolean {
    return new Date(endTime) < new Date();
  }
  
  ngOnChanges() {
    const eventoFromSession = sessionStorage.getItem('evento');
    if (eventoFromSession) {
      this.evento = JSON.parse(eventoFromSession);
    }
  }
  onToggleChange(eventInstancia: any) {
    this.subscription = this.eventosInstanciaService
    .updateDataEventoInstanciaAbertoOrClose(eventInstancia)
    .subscribe((res) => {
      const instancia = this.evento.instances.find((i: any) => i.id === eventInstancia);
      if (instancia) {
        instancia.isOpen = res.isOpen;
      }
    })
  }
}
