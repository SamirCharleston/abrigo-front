import { Component, inject } from '@angular/core';
import { Requerimento } from '../../../models/requerimento/requerimento';
import { Tutor } from '../../../models/tutor/tutor';
import { FormsModule } from '@angular/forms';
import { TutorService } from '../../../service/tutor/tutor.service';
import { Resposta } from '../../../models/resposta/resposta';
import { Router } from '@angular/router';
import { Cachorro } from '../../../models/cachorro/cachorro';
import { CachorroService } from '../../../service/cachorro/cachorro.service';

@Component({
  selector: 'app-requerimentoregister',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './requerimentoregister.component.html',
  styleUrl: './requerimentoregister.component.scss'
})
export class RequerimentoregisterComponent {

  router = inject(Router);
  tutorService = inject(TutorService);
  cachorroService = inject(CachorroService);


  tutores: Tutor[] = [];
  tutorSelecionado!: string;
  requerimento: Requerimento = new Requerimento();

  cachorros: Cachorro[] = [];
  cachorrosSelecionados: Cachorro[] = [];


  constructor() {
    this.buscarTutores();//Faz a requisicao de tutores para popular a lista de selecao de tutores

  }

  buscarTutores() {
    this.tutorService.findAll().subscribe({
      next: (response: Resposta<Tutor[]>) => {
        this.tutores = response.objeto;

        // Adiciona o 'Selecione um tutor' na lista de tutores
        response.objeto.unshift({ nome: 'Selecione um tutor', id: 0 } as Tutor);
      },
      error: (error: Resposta<Tutor[]>) => {
        console.log(error);
      }
    })
  }

  buscarCachorros() {
    this.cachorroService.listarCachorros().subscribe({
      next: (response: Resposta<Cachorro[]>) => {
        this.cachorros = response.objeto;
      },
      error: (error: Resposta<Cachorro[]>) => {
        console.log(error);
      }
    })
  }
}
