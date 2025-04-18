import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import {
  IonContent,
  IonInput,
  IonItem,
  IonModal,
  IonInputPasswordToggle,
  IonButton,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { IRegisterUserPlayer } from './interface/IRegisterPlayer';
@Component({
  selector: 'app-cadastro-player',
  templateUrl: './cadastro-player.component.html',
  styleUrls: ['./cadastro-player.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonContent,
    IonInput,
    IonItem,
    IonInputPasswordToggle,
    IonButton,
    IonContent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CadastroPlayerComponent  implements OnInit {
  subscription!: Subscription;
  constructor(
    private routes: Router
  ) {}

  ngOnInit(): void {}

  @ViewChild(IonModal) modal!: IonModal;
  registrarUserPlayer: IRegisterUserPlayer = {
    name: '',
    email: '',
    password: '',
    inviteCode: '',
  };

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    if (
      this.registrarUserPlayer.name && 
      this.registrarUserPlayer.email && 
      this.registrarUserPlayer.password && 
      this.registrarUserPlayer.inviteCode
    ) {
      // this.subscription = this.usersEventoService.createUserLeaderEvento(this.registrarUserPlayer).subscribe(
      //   success => success,
      //   error => error
      // );
    } else {
      alert('Preencha email e senha!');
    }
  }

  updateStartDateTime(event: any) {
    // this.registrarUserPlayer.startDateTime = event.detail.value;
  }

  updateEndtDateTime(event: any) {
    // this.registrarUserPlayer.endDateTime = event.detail.value;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
