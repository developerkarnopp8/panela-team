import { Component, OnInit, ViewChild } from '@angular/core';

import { FormsModule } from '@angular/forms';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonModal,
  IonTitle,
  IonToolbar,
  IonList,
  IonInputPasswordToggle,
  IonIcon,
  IonSelect,
  IonSelectOption
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
    IonSelectOption
  ],
})

export class RegistrarSeComponent  implements OnInit {
  ngOnInit(): void {
  }

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
    this.modal.dismiss(this.name, 'confirm');
  }


}
