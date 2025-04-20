import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonButton, 
  IonLoading, 
  IonInput,
  ToastController
} from '@ionic/angular/standalone';
import { Subscription } from 'rxjs/internal/Subscription';
import { InviteService } from 'src/app/shared/service/invite.service';
import { UsersEventoService } from 'src/app/shared/service/users.service';
import { InviteStoreService } from 'src/app/shared/stores/invite.store.service';
import { UsersPlayersStoreService } from 'src/app/shared/stores/users.store.service';

@Component({
  selector: 'app-jogadores-page-view',
  templateUrl: './jogadores-page-view.component.html',
  styleUrls: ['./jogadores-page-view.component.scss'],
  imports: [IonInput, FormsModule, IonContent, IonIcon, IonItem, IonLabel, IonList, IonNote, IonButton, IonLoading, CommonModule],
})
export class JogadoresPageViewComponent  implements OnInit {
  subscription!: Subscription;
  playersUser: any[] = [];
  linkInvite: string = '';
  constructor(
    private UsersEventoService: UsersEventoService,
    private inviteStoreService: InviteStoreService,

    private usersPlayersStoreService: UsersPlayersStoreService,
    private inviteService: InviteService,

    private toastController: ToastController
  ) { }

  ngOnInit() {
    const evento = JSON.parse(sessionStorage.getItem('evento') || '{}');
    this.playersUsers(evento.id);

  }

  async playersUsers(eventId: any){
    this.subscription = this.UsersEventoService.getUsersPlayers(eventId).subscribe(
      (res) => {
        this.usersPlayersStoreService.setUserPlayersEventos(res);
      })
      
      this.usersPlayersStoreService.userPlayers$.subscribe(eventos => {
        this.playersUser = eventos;
      });
  }

  async gerateLinkInvite() {
    const evento = JSON.parse(sessionStorage.getItem('evento') || '{}');
    const dataExpriacao = new Date();
    dataExpriacao.setDate(dataExpriacao.getDate() + 7); // Adiciona 7 dias à data atual
    this.subscription = this.inviteService.createdNewInvite({ eventId: evento.id, expiresAt: dataExpriacao }).subscribe(
      (res) => {
        console.log(res, 'res invite');
        //TRAZ O CODE DO LINK DO CONVIDE
        this.inviteStoreService.setInviteEventos(res);
      }
    )
    
    this.subscription = this.inviteStoreService.invite$.subscribe((invite: any) => {
      console.log(invite, 'invite code');
      if (invite && invite.code) {
        this.linkInvite = `https://www.eventos.com/invites/invites/${invite.code}`;
        console.log(this.linkInvite, 'link invite');
      } else {
        console.error('Invite does not have a code property');
      }
    }); 
  }
  
  copyLink() {
    // O link que você deseja copiar
    const link = this.linkInvite;

    // Cria um elemento input temporário
    const el = document.createElement('input');
    el.value = link;

    // Adiciona o elemento input ao DOM
    document.body.appendChild(el);

    // Seleciona o texto do elemento input
    el.select();

    // Copia o texto selecionado para a área de transferência
    document.execCommand('copy');

    // Remove o elemento input do DOM
    document.body.removeChild(el);

    this.presentToast('Link copiado!', 3000);
  }

  async presentToast(message: string, duration: number) {
    const toast = await this.toastController.create({
      message,
      duration,
      icon: 'basketball',
      position: 'bottom'
    });

    await toast.present();
  }
}
