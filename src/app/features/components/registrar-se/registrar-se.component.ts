import { Component, OnInit, ViewChild } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  IonContent,
  IonInput,
  IonItem,
  IonModal,
  IonInputPasswordToggle,
  IonSelect,
  IonSelectOption,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registrar-se',
  templateUrl: './registrar-se.component.html',
  styleUrls: ['./registrar-se.component.scss'],
  imports: [
    FormsModule,
    IonContent,
    IonInput,
    IonItem,
    IonInputPasswordToggle,
    IonSelect,
    IonSelectOption,
    IonButton,
  ],
})

export class RegistrarSeComponent  implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit(): void {}

  @ViewChild(IonModal) modal!: IonModal;

  name!: string;
  email!: string;
  password: string = 'admin';
  eventName!: string;
  eventType!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.name && this.email && this.password && this.eventName && this.eventType) {
      if (this.routes.url !== '/registrar') {
        this.routes.navigate(['/registrar'], { replaceUrl: true });
      }
  } else {
    alert('Preencha email e senha!');
  }
  }


}
