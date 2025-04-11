import { Component, OnInit } from '@angular/core';
import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  imports: [IonButtons, IonHeader, IonMenuButton, IonToolbar],
})
export class MenuBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
