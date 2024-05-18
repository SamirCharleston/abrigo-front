
import { CachorroService } from '../../../service/cachorro/cachorro.service';
import { Cachorro } from '../../../models/cachorro/cachorro';
import { NgFor } from '@angular/common';
import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Resposta } from '../../../models/resposta/resposta';

@Component({
  selector: 'app-cachorrolist',
  standalone: true,
  imports:  [RouterLink, MdbModalModule],
  templateUrl: './cachorrolist.component.html',
  styleUrl: './cachorrolist.component.scss'
})
export class CachorrolistComponent {
  service: CachorroService = new CachorroService();
  cachorros: Cachorro[] = [];
  mensagemDeErro!: string;

  constructor() {
    this.service.listarCachorros().subscribe({
      next: (response: Resposta<Cachorro[]>) => {
        this.cachorros = response.objeto;
      },
      error: (error: Resposta<Cachorro[]>) => {
        this .mensagemDeErro = error.mensagem;
      }
    });
  }
}
