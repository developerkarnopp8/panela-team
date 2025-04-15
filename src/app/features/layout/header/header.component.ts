import { 
  Component, 
  Input, 
  OnChanges, 
  OnInit 
} from '@angular/core';
import { 
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
 } from '@ionic/angular/standalone';
import { ToogleDarkWhiteComponent } from "../toogle-dark-white/toogle-dark-white.component";
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  imports: [
    IonButtons,
    IonHeader,
    IonTitle,
    IonToolbar,
    ToogleDarkWhiteComponent,
    IonBackButton,
    CommonModule,
    IonButtons, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    MenuBarComponent
],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit, OnChanges {

  verificaRota: boolean = false;
  verificaRotaMenu: boolean = false;

  @Input() currentUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private location: Location,
    private navCtrl: NavController
  ) {

  }

  ngOnInit() {
    this.validaRota();  
  }

  ngOnChanges() {
   this.validaRota();  
  }
  
  validaRota() {
    this.verificaRota = this.currentUrl.includes('/iniciar') || 
                        this.currentUrl.includes('/eventos');
  
    this.verificaRotaMenu = this.currentUrl.includes('/iniciar') || 
                            this.currentUrl.includes('/registrar') || 
                            this.currentUrl.includes('/login') ||
                            this.currentUrl.includes('/details');

  }


  back(){
    console.log(window.history.length > 1);
    
    if (window.history.length > 1) {
      this.navCtrl.back();
    } else {
      // this.routes.navigate(['/iniciar'], { replaceUrl: true }); // ou outra rota fallback
    }
  }
}
