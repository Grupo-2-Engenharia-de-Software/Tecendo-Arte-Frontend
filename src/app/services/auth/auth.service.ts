import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);

  if (usuarioService.getLoggedUser()) {
    return true; 
  } else {
    router.navigate(['/login']);
    return false;
  }
};