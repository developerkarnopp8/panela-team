import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { 
  IonFooter,
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton
 } from '@ionic/angular/standalone';
import { ToogleDarkWhiteComponent } from "../toogle-dark-white/toogle-dark-white.component";
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    IonButtons,
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    ToogleDarkWhiteComponent,
    IonBackButton,
    CommonModule
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit, OnChanges {

  verificaRota: boolean = false;

  @Input() currentUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    // private location: Location
  ) {

  }

  ngOnInit() {
  
  }

  ngOnChanges() {
    this.verificaRota = this.currentUrl.includes('/iniciar');
  }

  back(){
    this.routes.navigate(['..'], { relativeTo: this.route });
  }
}
