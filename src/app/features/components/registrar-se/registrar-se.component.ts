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
  IonTextarea
} from '@ionic/angular/standalone';
import { IRegisterUserLeader } from './interface/IRegister';
import { UsersEventoService } from 'src/app/shared/service/users.service';
import { SubSink } from 'subsink';

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
    IonTextarea
  ],
})

export class RegistrarSeComponent  implements OnInit {
  private subs = new SubSink()

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

      this.subs.sink = this.usersEventoService.createUserLeaderEvento(this.registrarUserLeader).subscribe(
        success => success,
        error => error
      );
      // if (this.routes.url !== '/registrar') {
      //   this.routes.navigate(['/registrar'], { replaceUrl: true });
      // }
  } else {
    alert('Preencha email e senha!');
  }
  }


}
