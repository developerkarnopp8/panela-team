import { Component, OnInit } from '@angular/core';
import {
  ActionSheetController,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-criar-novo-evento',
  templateUrl: './criar-novo-evento.component.html',
  styleUrls: ['./criar-novo-evento.component.scss'],
  imports: [IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar],
})
export class CriarNovoEventoComponent  implements OnInit {
  presentingElement!: HTMLElement | null;

  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Tudo pronto para o novo Game?',
      buttons: [
        {
          text: 'Sim',
          role: 'confirm',
        },
        {
          text: 'Não',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };

}
