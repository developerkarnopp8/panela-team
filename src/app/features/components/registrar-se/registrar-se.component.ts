import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

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
  IonTextarea,
  IonDatetime, 
  IonDatetimeButton
} from '@ionic/angular/standalone';
import { IRegisterUserLeader } from './interface/IRegister';
import { UsersEventoService } from 'src/app/shared/service/users.service';
import { SubSink } from 'subsink';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

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
    IonTextarea,
    IonDatetime, 
    IonDatetimeButton, 
    IonModal
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RegistrarSeComponent  implements OnInit, OnDestroy {
  subscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private usersEventoService: UsersEventoService,
    private routes: Router
  ) {}

  ngOnInit(): void {}

  @ViewChild(IonModal) modal!: IonModal;
  registrarUserLeader: IRegisterUserLeader = {
    name: '',
    email: '',
    password: '',
    eventName: '',
    type: '',
    startDateTime: '',
    endDateTime: '',  
    images:  [],
    description: '',
    isOpen: false
  };

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    if (
      this.registrarUserLeader.name && 
      this.registrarUserLeader.email && 
      this.registrarUserLeader.password && 
      this.registrarUserLeader.eventName && 
      this.registrarUserLeader.type
    ) {
      this.subscription = this.usersEventoService.createUserLeaderEvento(this.registrarUserLeader).subscribe(
        success => success,
        error => error
      );
    } else {
      alert('Preencha email e senha!');
    }
  }

  updateStartDateTime(event: any) {
    this.registrarUserLeader.startDateTime = event.detail.value;
  }

  updateEndtDateTime(event: any) {
    this.registrarUserLeader.endDateTime = event.detail.value;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
