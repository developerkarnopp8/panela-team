import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  imports: [IonContent],
})
export class EventosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
