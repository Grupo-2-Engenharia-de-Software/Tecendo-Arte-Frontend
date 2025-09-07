import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const tipoContaGuard: CanActivateFn = (route, state) => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);
  const toastr = inject(ToastrService);

  const usuario = usuarioService.getLoggedUser();

  if (!usuario?.tipoConta) {
    return true;
  }

  router.navigate(['/']);
  toastr.warning('É necessário ser artista para acessar esta página.', '', {
    timeOut: 2000,
    positionClass: 'toast-top-center',
  });
  return false;
};
