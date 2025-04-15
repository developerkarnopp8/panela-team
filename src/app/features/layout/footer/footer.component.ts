import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IonFooter } from '@ionic/angular/standalone';
import { TabsFooterAppComponent } from '../../components/tabs/tabs-footer-app/tabs-footer-app.component';
import { CriarNovoEventoComponent } from "../../components/modal/criar-novo-evento/criar-novo-evento.component";
import { CriarNovaInstanciaComponent } from "../../components/modal/criar-nova-instancia/criar-nova-instancia.component";

@Component({
  selector: 'app-footer',
  imports: [
    IonFooter,
    CommonModule,
    TabsFooterAppComponent,
    CriarNovoEventoComponent,
    CriarNovaInstanciaComponent
],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit, OnChanges {
  @Input() currentUrl: string = '';
  verificaRota: boolean = false;

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    this.verificaRota = this.currentUrl.includes('/iniciar') || this.currentUrl.includes('/login') || this.currentUrl.includes('/registrar');
  }
}
