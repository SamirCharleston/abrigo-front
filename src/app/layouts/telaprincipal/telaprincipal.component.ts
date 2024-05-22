import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';

@Component({
  selector: 'app-telaprincipal',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MdbAccordionModule],
  templateUrl: './telaprincipal.component.html',
  styleUrl: './telaprincipal.component.scss'
})
export class TelaprincipalComponent {
  router = inject(Router);
  nome = sessionStorage.getItem('nomeDoUsuario');
  iniciaAnimacao = true;

  constructor() {
    // setTimeout(() => {
    //   this.iniciaAnimacao = false;
    // }, 1000);
  }

  logout() {
    this.nome = '';
    sessionStorage.clear();
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
