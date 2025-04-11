import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { ListEventosComponent } from "../components/list-eventos/list-eventos.component";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  imports: [IonContent, ListEventosComponent],
})
export class EventosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
