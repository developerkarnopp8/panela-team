import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent,
  IonList
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-details-eventos',
  templateUrl: './details-eventos.component.html',
  styleUrls: ['./details-eventos.component.scss'],
  imports: [ IonContent, IonList ]
})
export class DetailsEventosComponent  implements OnInit {

  evento: any;

  constructor(private router: Router) {}

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

    console.log('Evento:', this.evento);
  }
}
