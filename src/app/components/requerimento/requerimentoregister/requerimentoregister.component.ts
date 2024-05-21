import { Component, inject } from '@angular/core';
import { Requerimento } from '../../../models/requerimento/requerimento';
import { Tutor } from '../../../models/tutor/tutor';
import { FormsModule } from '@angular/forms';
import { TutorService } from '../../../service/tutor/tutor.service';
import { Resposta } from '../../../models/resposta/resposta';
import { Router } from '@angular/router';
import { Cachorro } from '../../../models/cachorro/cachorro';
import { CachorroService } from '../../../service/cachorro/cachorro.service';
import { RequerimentoService } from '../../../service/requerimento/requerimento.service';

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
  requerimentoService = inject(RequerimentoService);

  dataAtual!: string;
  dataParaRequerimento: Date = new Date();

  tutores: Tutor[] = [];
  tutorSelecionado!: string;
  requerimento: Requerimento = new Requerimento();

  cachorros: Cachorro[] = [];
  cachorrosSelecionados: Cachorro[] = [];

  //Controla a apresentacao de elementos da tele
  controlaSelecaoCachorro: boolean[] = []; //Controla a apresentacao das patinhas que representam os cachorros selecionados

  constructor() {
    this.buscarTutores();//Faz a requisicao de tutores para popular a lista de selecao de tutores
    this.buscarCachorros();//Faz a requisicao de cachorros para popular a lista de selecao de cachorros
    this.dataAtual = this.dataParaRequerimento.getDate() + '/' + (this.dataParaRequerimento.getMonth() + 1) + '/' + this.dataParaRequerimento.getFullYear();
  }

  enviarRequerimento(){

    //Preenche o objeto requerimento com todos os dados
    this.requerimento.dataDoRequerimento = this.dataParaRequerimento;
    this.requerimento.caesRequeridos = this.cachorrosSelecionados;
    this.requerimento.autorDoRequerimento = this.tutores.find(tutor => tutor.nome == this.tutorSelecionado)!;

    //Verifica se o tutor foi selecionado
    if(this.requerimento.autorDoRequerimento == undefined) {
      alert('Selecione um tutor');
      return;
    }

    this.requerimentoService.registrar(this.requerimento).subscribe({
      next: (response: Resposta<void>) => {
        alert(response.mensagem);
        this.router.navigate(['home/requerimentos']);
      },
      error: (error: any) => {
        alert(error.error.mensagem);
      }
    })
  }
    

  selecionarCachorro(index: number) {
    this.controlaSelecaoCachorro[index] = !this.controlaSelecaoCachorro[index];

    //Adiciona ou remove o cachorro da lista de cachorros selecionados
    //Caso o cachorro ja esteja selecionado, ele e removido, caso contrario, ele e adicionado
    if(this.controlaSelecaoCachorro[index]) {
      this.cachorrosSelecionados.push(this.cachorros[index]);
    } else {
      this.cachorrosSelecionados.splice(this.cachorrosSelecionados.indexOf(this.cachorros[index]), 1);
    }
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
