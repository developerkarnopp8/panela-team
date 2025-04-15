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
  selector: 'app-criar-nova-instancia',
  templateUrl: './criar-nova-instancia.component.html',
  styleUrls: ['./criar-nova-instancia.component.scss'],
  imports: [IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar],
})
export class CriarNovaInstanciaComponent  implements OnInit {

  presentingElement!: HTMLElement | null;

  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Tudo pronto para o novo horario do Game?',
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
