import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
// import {CookieService} from 'ngx-cookie-service';
import {LocalStorageService} from '../../shared/services/localStorage/local-storage.service';

export const loggedGuard: CanActivateFn = (route, state): boolean => {

  const localStorage: LocalStorageService = inject(LocalStorageService);
  const router: Router = inject(Router);

  if(localStorage.getItem('token')){
    router.navigateByUrl('/home');
    return  false;
  }
  return true;
};
