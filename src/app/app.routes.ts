import { Routes } from '@angular/router';
import { EventosComponent } from './features/eventos/eventos.component';
import { IniciarComponent } from './features/iniciar/iniciar.component';
import { LoginComponent } from './features/components/login/login.component';
import { RegistrarSeComponent } from './features/components/registrar-se/registrar-se.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { DetailsEventosComponent } from './features/components/details-eventos/details-eventos.component';
import { JogadoresPageViewComponent } from './features/jogadores-page-view/jogadores-page-view.component';
import { CadastroPlayerComponent } from './features/jogadores-page-view/cadastro-player/cadastro-player.component';

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
    canActivate: [authGuard],
    component: EventosComponent,
    title: 'Eventos',
  },
  {
    path: 'details',
    pathMatch: 'full',
    canActivate: [authGuard],
    component: DetailsEventosComponent,
    title: 'Detalhes Evento',
  },
  {
    path: 'players',
    pathMatch: 'full',
    canActivate: [authGuard],
    component: JogadoresPageViewComponent,
    title: 'Todos os Jogadores',
  },
  {
    path: 'register-player',
    pathMatch: 'full',
    component: CadastroPlayerComponent,
    title: 'Cadastro de Jogadores',
  }
];
