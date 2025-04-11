import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { chevronForward, listCircle } from 'ionicons/icons';

@Component({
  selector: 'app-list-eventos',
  templateUrl: './list-eventos.component.html',
  styleUrls: ['./list-eventos.component.scss'],
  imports: [IonContent, IonIcon, IonItem, IonLabel, IonList, IonNote],
})
export class ListEventosComponent  implements OnInit {

  constructor() { 
    addIcons({ chevronForward, listCircle });
   }

  ngOnInit() {

  }

}
