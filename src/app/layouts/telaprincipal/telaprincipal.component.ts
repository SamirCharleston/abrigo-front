import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { LoginService } from '../../service/auth/login.service';
import { AuthorizationFor } from '../../service/auth/authorizationFor';

@Component({
  selector: 'app-telaprincipal',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MdbAccordionModule],
  templateUrl: './telaprincipal.component.html',
  styleUrl: './telaprincipal.component.scss'
})
export class TelaprincipalComponent {

  router = inject(Router);
  loginService = inject(LoginService);

  nome!: string;
  iniciaAnimacao = true;
  ehResponsavel!: boolean;

  constructor() {
    if(sessionStorage.getItem('iniciaAnimacao') === 't') {
      this.iniciaAnimacao = false;
    }

    setTimeout(() => {
      sessionStorage.setItem('iniciaAnimacao', 't');
      this.iniciaAnimacao = false;
    }, 1000);

    this.ehResponsavel = this.loginService.hasPermission(AuthorizationFor.RESPONSAVEL);
    this.nome = this.loginService.getTokenPayload().username;
  }

  logout() {
    this.nome = '';
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  //Metodo para deixar a primeira letra maiuscula do nome do usuario
  primeiraLetraMaiuscula(palavra: string | null): string {
    if (!palavra) {
      return '';
    }
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
  }
}
