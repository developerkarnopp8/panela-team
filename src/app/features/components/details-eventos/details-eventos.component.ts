import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {}
  

}
