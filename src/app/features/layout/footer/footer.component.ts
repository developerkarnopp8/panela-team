import { Component, OnInit } from '@angular/core';
import { IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer',
  imports: [IonFooter, IonHeader, IonTitle, IonToolbar],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
