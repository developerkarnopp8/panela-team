import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const currentUserToken  = localStorage.getItem('currentUserToken');

  if(currentUserToken != null){
    return true
  }else{
    router.navigateByUrl('/iniciar')
    return false;
  }
};
