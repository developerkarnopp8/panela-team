import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
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

  constructor(
    private route: Router
  ) { 
    addIcons({ chevronForward, listCircle });
   }

  ngOnInit() {

  }

  detailEvento(){
    if (this.route.url !== '/details') {
      this.route.navigate(['/details'], { replaceUrl: true });
    }
    console.log("Detail evento clicked")
  }

}
