import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { addCircleSharp, basketball, listCircleSharp, playCircle, radio } from 'ionicons/icons';
@Component({
  selector: 'app-tabs-footer-app',
  templateUrl: './tabs-footer-app.component.html',
  styleUrls: ['./tabs-footer-app.component.scss'],
  imports: [
    IonIcon, 
    IonTabBar, 
    IonTabButton, 
  ],
})
export class TabsFooterAppComponent  implements OnInit {

  constructor() {
    addIcons({ basketball, addCircleSharp, listCircleSharp });
  }

  ngOnInit() {}

}
