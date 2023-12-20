import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { inject } from '@angular/core';

export const canActivateFn: CanActivateFn = (route, state) => {
  const authService = inject(UserService);
  const router = inject(Router);
  if(authService.isAuthenticated()){
    return true;
  } else {
    router.navigate(['sign-in']);
    return false;
  }
};
