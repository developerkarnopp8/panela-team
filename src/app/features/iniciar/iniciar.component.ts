import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RegistrarSeComponent } from "../components/modal/registrar-se/registrar-se.component";
import { LoginComponent } from "../components/modal/login/login.component";

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.scss'],
  standalone: true,
  imports: [IonicModule, RegistrarSeComponent, LoginComponent],
})
export class IniciarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
