import { Component, OnInit } from '@angular/core';
import { 
  IonFooter,
  IonHeader,
  IonTitle,
  IonToolbar
 } from '@ionic/angular/standalone';
import { ToogleDarkWhiteComponent } from "../toogle-dark-white/toogle-dark-white.component";

@Component({
  selector: 'app-header',
  imports: [IonFooter, IonHeader, IonTitle, IonToolbar, ToogleDarkWhiteComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
