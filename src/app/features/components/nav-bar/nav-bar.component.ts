import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [IonicModule],
})
export class NavBarComponent  implements OnInit {

  constructor(
    private router: Router,
     private authService : AuthService
  ) { }

  ngOnInit() {}

  logOut(){
    this.authService.logout(); //Deslogar o usuário
  }
}
