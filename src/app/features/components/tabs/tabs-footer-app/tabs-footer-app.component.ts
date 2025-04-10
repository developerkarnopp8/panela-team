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
    IonContent, 
    IonHeader, 
    IonIcon, 
    IonTab, 
    IonTabBar, 
    IonTabButton, 
    IonTabs, 
    IonTitle, 
    IonToolbar
  ],
})
export class TabsFooterAppComponent  implements OnInit {

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ basketball, addCircleSharp, listCircleSharp });
  }

  ngOnInit() {}

}
