import { CachorroService } from '../../../service/cachorro/cachorro.service';
import { Cachorro } from '../../../models/cachorro/cachorro';
import { NgFor } from '@angular/common';
import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { RouterLink, Router, Routes } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Resposta } from '../../../models/resposta/resposta';
import { LoginService } from '../../../service/auth/login.service';
import { AuthorizationFor } from '../../../service/auth/authorizationFor';

@Component({
  selector: 'app-cachorrolist',
  standalone: true,
  imports:  [RouterLink, MdbModalModule],
  templateUrl: './cachorrolist.component.html',
  styleUrl: './cachorrolist.component.scss'
})
export class CachorrolistComponent {
  router = inject(Router);
  loginService = inject(LoginService);

  service: CachorroService = new CachorroService();
  cachorros: Cachorro[] = [];
  mensagemDeErro!: string;
  ehResponsavel!: boolean;

  constructor(private modalService: MdbModalService) {
    this.listarCachorros();
    this.ehResponsavel = this.loginService.hasPermission(AuthorizationFor.RESPONSAVEL);
  }

  listarCachorros(){
    this.service.listarCachorros().subscribe({
      next: (response: Resposta<Cachorro[]>) => {
        this.cachorros = response.objeto;
      },
      error: (error: Resposta<Cachorro[]>) => {
        this.mensagemDeErro = error.mensagem;
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalService.open(template);
  }

  onSubmit(): void {
    console.log('Cachorro registrado:', this.cachorros);
    this.router.navigate(['/cachorros']);
  }

  onCancel(): void {
    this.router.navigate(['/menu-principal']);
  }

  delete(cachorro: Cachorro) {
    if(confirm("Tem certeza que deseja deletar?") ){
      this.service.delete(cachorro.id).subscribe({
        next: (response: Resposta<void>) => {
          alert('Cachorro deletado com sucesso!');
          //O router atualiza a pagina para listar novamente
          this.listarCachorros();
        },
        error: (error: any) => {
          console.error('Erro ao deletar cachorro:', error);
          alert('Ocorreu um erro ao deletar o cachorro. Por favor, tente novamente.');
        }
      });
    }
  }
  update(cachorro: Cachorro) {
    this.router.navigate(['home/cachorro/update', cachorro.id]);
  }
}
