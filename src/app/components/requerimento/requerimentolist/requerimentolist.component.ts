import { Component, inject } from '@angular/core';
import { Requerimento } from '../../../models/requerimento/requerimento';
import { RequerimentoService } from '../../../service/requerimento/requerimento.service';
import { Resposta } from '../../../models/resposta/resposta';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from '../../../service/auth/login.service';
import { AuthorizationFor } from '../../../service/auth/authorizationFor';

@Component({
  selector: 'app-requerimentolist',
  standalone: true,
  imports: [MdbAccordionModule],
  templateUrl: './requerimentolist.component.html',
  styleUrl: './requerimentolist.component.scss'
})
export class RequerimentolistComponent {
  router = inject(Router);
  requerimentoService = inject(RequerimentoService);
  loginService = inject(LoginService);
  ehResponsavel!: boolean;

  requerimentos!: Requerimento[];

  constructor() {
    this.requerimentoService.listarRequerimentos().subscribe({
      next: (response: Resposta<Requerimento[]>) => {
        this.requerimentos = response.objeto;
      },
      error: (error: Resposta<Requerimento[]>) => {
        console.log(error);
      }
    });

    this.ehResponsavel = this.loginService.hasPermission(AuthorizationFor.RESPONSAVEL);
  }

  primeiraLetraMaiuscula(str: string): string {
    str = str.toLocaleLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  excluirRequerimento(requerimento: Requerimento) {
    const navigationExtras: NavigationExtras = {
      state: {
        requerimento: requerimento
      }
    };
    this.router.navigate([`home/requerimentos/deletar`], navigationExtras);
  }
  atualizarRequerimento(requerimento: Requerimento) {
    const navigationExtras: NavigationExtras = {
      state: {
        requerimento: requerimento
      }
    };
    this.router.navigate([`home/requerimentos/atualizar`], navigationExtras);
  }
}
