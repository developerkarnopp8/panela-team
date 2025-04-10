import { Component, OnInit, ViewChild } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit(): void {
  }

  @ViewChild(IonModal) modal!: IonModal;

  email: string = 'gustavokarnopp.dev@gmail.com';
  password: string = 'admin';

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.email && this.password) {
      this.modal.dismiss(null, 'confirm');
  
      // Aguarda o modal fechar antes de redirecionar
      setTimeout(() => {
        if (this.routes.url !== '/eventos') {
          this.routes.navigate(['/eventos'], { replaceUrl: true });
        }
      }, 1000);
    } else {
      alert('Preencha email e senha!');
    }
  }
  


}
