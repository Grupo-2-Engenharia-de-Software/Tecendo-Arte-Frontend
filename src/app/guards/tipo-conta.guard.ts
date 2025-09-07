import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';
import { inject } from '@angular/core';

export const tipoContaGuard: CanActivateFn = (route, state) => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);

  const usuario = usuarioService.getLoggedUser();

  if (!usuario?.tipoConta) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
