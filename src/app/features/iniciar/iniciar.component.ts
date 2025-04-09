import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RegistrarSeComponent } from "../components/modal/registrar-se/registrar-se.component";

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.scss'],
  standalone: true,
  imports: [IonicModule, RegistrarSeComponent],
})
export class IniciarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
