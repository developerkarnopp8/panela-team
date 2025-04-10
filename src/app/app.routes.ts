import { Routes } from '@angular/router';
import { EventosComponent } from './features/eventos/eventos.component';
import { IniciarComponent } from './features/iniciar/iniciar.component';
import { LoginComponent } from './features/components/login/login.component';
import { RegistrarSeComponent } from './features/components/registrar-se/registrar-se.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/iniciar', 
    pathMatch: 'full',
  },
  {
    path: 'iniciar',
    component: IniciarComponent,
    pathMatch: 'full',
    title: 'Inicio',
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'registrar',
    pathMatch: 'full',
    component: RegistrarSeComponent,
    title: 'Registrar-se',
  },
  {
    path: 'eventos',
    pathMatch: 'full',
    component: EventosComponent,
    title: 'Eventos',
  }
];
