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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
export class LoginComponent  implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild(IonModal) modal!: IonModal;

  email!: string;
  password: string = 'admin';

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.email, 'confirm');
  }


}
