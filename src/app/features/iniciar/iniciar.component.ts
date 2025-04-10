import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class IniciarComponent  implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit() {}

  registrarSe(){
    if (this.routes.url !== '/registrar') {
      this.routes.navigate(['/registrar'], { replaceUrl: true });
    }
  }
  logarSe(){
    if (this.routes.url !== '/login') {
      this.routes.navigate(['/login'], { replaceUrl: true });
    }
  }
      

}
