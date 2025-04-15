import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  IonBadge,
  IonButton
} from '@ionic/angular/standalone';
import { Subscription } from 'rxjs/internal/Subscription';
import { EventosInstanciaService } from 'src/app/shared/service/eventos.instancia.service';
import { EventosService } from 'src/app/shared/service/eventos.service';
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
    IonBadge,
    IonButton
  ],
  standalone: true,
})
export class DetailsEventosComponent  implements OnInit {

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
      // fallback se entrou direto na rota
      const eventoFromSession = sessionStorage.getItem('evento');
      if (eventoFromSession) {
        this.evento = JSON.parse(eventoFromSession);
      }
    }
  }

  isPast(endTime: string | Date): boolean {
    return new Date(endTime) < new Date();
  }
  
  onToggleChange(eventInstancia: any) {
    this.subscription = this.eventosInstanciaService
    .updateDataEventoInstanciaAbertoOrClose(eventInstancia)
    .subscribe((res) => {
      // Atualiza o item da lista local
      const instancia = this.evento.instances.find((i: any) => i.id === eventInstancia);
      if (instancia) {
        instancia.isOpen = res.isOpen; // <-- atualiza o toggle e badge
      }
    })
  }
}
