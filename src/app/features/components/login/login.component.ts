import { Component, OnInit, ViewChild } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonModal,
  IonInputPasswordToggle 
} from '@ionic/angular/standalone';
import { ILogin } from './interface/Ilogin';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
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

  private subs = new SubSink()
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private routes: Router
  ) {}

  ngOnInit(): void {
  }

  @ViewChild(IonModal) modal!: IonModal;

  login: ILogin = {
    email: 'ml@panela.dev',
    password: '123456'
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.login.email && this.login.password) {
      this.subs.sink = this.authService.login(this.login).subscribe(
        success => success,
        error => error
      );
    } else {
      alert('Preencha email e senha!');
    }
  }
  


}
