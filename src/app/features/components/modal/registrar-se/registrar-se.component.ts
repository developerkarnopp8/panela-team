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
  IonInputPasswordToggle 
} from '@ionic/angular/standalone';

import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-registrar-se',
  templateUrl: './registrar-se.component.html',
  styleUrls: ['./registrar-se.component.scss'],
  imports: [
    FormsModule,
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
    IonInputPasswordToggle 
  ],
})

export class RegistrarSeComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
