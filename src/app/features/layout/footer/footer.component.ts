import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IonFooter, IonToolbar } from '@ionic/angular/standalone';
import { TabsFooterAppComponent } from '../../components/tabs/tabs-footer-app/tabs-footer-app.component';

@Component({
  selector: 'app-footer',
  imports: [
    IonFooter,
    IonToolbar,
    CommonModule,
    TabsFooterAppComponent
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
    this.verificaRota = this.currentUrl.includes('/iniciar') || this.currentUrl.includes('/login') || this.currentUrl.includes('/cadastro');
  }
}
