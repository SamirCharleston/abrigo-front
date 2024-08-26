import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { AuthorizationFor } from './authorizationFor';

export const loginGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  const loginService = inject(LoginService);

  return true;
  if(loginService.hasPermission(AuthorizationFor.RESPONSAVEL)){
    return true;
  }

  if(loginService.hasPermission(AuthorizationFor.VOLUNTARIO) && 
  !(state.url === '/home/requerimentos/novo' ||
    state.url === '/home/requerimentos/atualizar' ||
    state.url === '/home/requerimentos/deletar' ||
    state.url === '/home/tutors' ||
    state.url === '/home/tutors/new' ||
    state.url === '/home/tutors/edit/:id' ||
    state.url === '/home/tutors/list')) {
      return true;
  }
      
  alert("Você não tem permissão para acessar esta rota!");
  router.navigate(["/login"]);
  return false;
}
