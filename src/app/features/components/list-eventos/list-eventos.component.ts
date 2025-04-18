import { Component, CUSTOM_ELEMENTS_SCHEMA, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonToggle
} from '@ionic/angular/standalone';
import { Subscription } from 'rxjs/internal/Subscription';
import { addIcons } from 'ionicons';
import { basketball, body, chevronForward, listCircle } from 'ionicons/icons';
import { EventosService } from 'src/app/shared/service/eventos.service';
import { CommonModule } from '@angular/common';
import { EventosStoreService } from 'src/app/shared/stores/eventos.store.service';

@Component({
  selector: 'app-list-eventos',
  templateUrl: './list-eventos.component.html',
  styleUrls: ['./list-eventos.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonIcon, IonItem, IonLabel, IonList, IonNote, IonToggle, CommonModule],
})
export class ListEventosComponent implements OnInit, OnChanges, OnDestroy {

  subscription!: Subscription;
  eventos: any[] = [];

  constructor(
    private route: Router,
    private eventosService: EventosService,
    private eventosStoreService: EventosStoreService,
  ) { 
    addIcons({ chevronForward, basketball });
  }

  ngOnInit() {
    this.getEventos();
    sessionStorage.removeItem('evento')
  }

  async getEventos(){
    this.subscription = this.eventosService.getEventos().subscribe(
      (res) => {
        this.eventosStoreService.setEventos(res);
      })
      
      this.eventosStoreService.eventos$.subscribe(eventos => {
        this.eventos = eventos;
      });
  }

  detailEvento(evento: any) {
    sessionStorage.setItem('evento', JSON.stringify(evento));
    if (this.route.url !== '/details') {
      this.route.navigate(
        ['/details'], 
        { replaceUrl: true, 
          state: { evento } 
        }
      );
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
