import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
} from '@ionic/angular/standalone';
import { Subscription } from 'rxjs/internal/Subscription';
import { addIcons } from 'ionicons';
import { basketball, chevronForward, listCircle } from 'ionicons/icons';
import { EventosService } from 'src/app/shared/service/eventos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-eventos',
  templateUrl: './list-eventos.component.html',
  styleUrls: ['./list-eventos.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonIcon, IonItem, IonLabel, IonList, IonNote, CommonModule],
})
export class ListEventosComponent implements OnInit {

  subscription!: Subscription;
  eventos: any[] = [];

  constructor(
    private route: Router,
    private eventosService: EventosService,
  ) { 
    addIcons({ chevronForward, basketball });
  }

  ngOnInit() {
    this.getEventos();
  }

  async getEventos(){
    this.eventosService.getEventos().subscribe((res) => {
      this.eventos = res;
      console.log(res);
    })
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
    console.log("Detail evento clicked")
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
