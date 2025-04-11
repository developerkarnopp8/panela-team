import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const routes = inject(Router);
  const canvas  = JSON.parse(sessionStorage.getItem('token') || '{}');

  if(canvas != null){
    return true
  }else{
    routes.navigate(['/iniciar'], { replaceUrl: true });
    return false;
  }
};
