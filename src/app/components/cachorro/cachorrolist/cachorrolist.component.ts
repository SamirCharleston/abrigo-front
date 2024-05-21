import { CachorroService } from '../../../service/cachorro/cachorro.service';
import { Cachorro } from '../../../models/cachorro/cachorro';
import { NgFor } from '@angular/common';
import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { RouterLink, Router, Routes } from '@angular/router';
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

  constructor(private modalService: MdbModalService, private router: Router) {
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
}
