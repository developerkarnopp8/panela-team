import { Routes } from '@angular/router';
import { EventosComponent } from './features/eventos/eventos.component';
import { IniciarComponent } from './features/iniciar/iniciar.component';
import { LoginComponent } from './features/components/login/login.component';
import { RegistrarSeComponent } from './features/components/registrar-se/registrar-se.component';

export const routes: Routes = [
  {
    path: '',
    // loadComponent: () => import('./features/iniciar/iniciar.component').then(m => m.IniciarComponent), 
    component: IniciarComponent,
  },
  {
    path: 'iniciar',
    redirectTo: '', 
    pathMatch: 'full',
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
