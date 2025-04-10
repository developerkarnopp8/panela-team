import { Component, OnInit, ViewChild } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonModal,
  IonInputPasswordToggle 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    FormsModule,
    IonButton,
    IonContent,
    IonInput,
    IonItem,
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
        if (this.routes.url !== '/eventos') {
          this.routes.navigate(['/eventos']);
          // this.routes.navigate(['/eventos'], { replaceUrl: true });
        }
    } else {
      alert('Preencha email e senha!');
    }
  }
  


}
