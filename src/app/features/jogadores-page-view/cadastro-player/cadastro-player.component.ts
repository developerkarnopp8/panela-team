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
import { ActivatedRoute, Router } from '@angular/router';
import { IRegisterUserPlayer } from './interface/IRegisterPlayer';
import { InviteService } from 'src/app/shared/service/invite.service';
import { UsersEventoService } from 'src/app/shared/service/users.service';
import { UsersPlayersStoreService } from 'src/app/shared/stores/users.store.service';
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
  @ViewChild(IonModal) modal!: IonModal;
  registrarUserPlayer: IRegisterUserPlayer = {
    name: '',
    email: '',
    password: '',
    inviteCode: '',
  };

  subscription!: Subscription;

  constructor(
    private routes: Router,
    private activatedRoute: ActivatedRoute,

    private inviteService: InviteService,
    private usersEventoService: UsersEventoService,
    private usersPlayersStoreService: UsersPlayersStoreService
  ) {}

  ngOnInit() {
    this.getCode();
  }

  getCode(){
    const code = this.activatedRoute.snapshot.params;
    if (code) {
      this.subscription = this.inviteService.getInvite(code['playerId']).subscribe(event => {
        if(event) {
          this.registrarUserPlayer.inviteCode = event.code;
        } else {
          alert('Código de convite inválido ou expirado.');
        }
      });
    }
  }

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
      this.subscription = this.usersEventoService.createUserPlayersEvento(this.registrarUserPlayer).subscribe((res) => {
        console.log('Código de getInvite:', res);
        this.usersPlayersStoreService.adicionarUserPlayersEvento(res);
      });
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
