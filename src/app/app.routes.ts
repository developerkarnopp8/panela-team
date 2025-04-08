import { Routes } from '@angular/router';
// import suas páginas standalone aqui
// import { HomePage } from './pages/home.page'; // exemplo

export const routes: Routes = [
  {
    path: '',
    // component: HomePage, // substitua pela página real
    loadComponent: () => import('./features/iniciar/iniciar.component').then(m => m.IniciarComponent), // melhor com lazy
  }
];
