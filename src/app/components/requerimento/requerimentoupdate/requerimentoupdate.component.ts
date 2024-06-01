import { Component, inject } from '@angular/core';
import { Requerimento } from '../../../models/requerimento/requerimento';
import { Router } from '@angular/router';
import { Tutor } from '../../../models/tutor/tutor';
import { Cachorro } from '../../../models/cachorro/cachorro';
import { FormsModule } from '@angular/forms';
import { TutorService } from '../../../service/tutor/tutor.service';
import { CachorroService } from '../../../service/cachorro/cachorro.service';
import { RequerimentoService } from '../../../service/requerimento/requerimento.service';
import { Resposta } from '../../../models/resposta/resposta';

@Component({
  selector: 'app-requerimentoupdate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './requerimentoupdate.component.html',
  styleUrl: './requerimentoupdate.component.scss'
})
export class RequerimentoupdateComponent {
  router = inject(Router);
  tutorService = inject(TutorService);
  cachorroService = inject(CachorroService);
  requerimentoService = inject(RequerimentoService);

  dataAtual!: string;
  dataParaRequerimento: Date = new Date();

  tutores: Tutor[] = [];
  tutorSelecionado!: string;
  requerimento!: Requerimento;

  cachorros: Cachorro[] = [];
  cachorrosSelecionados: Cachorro[] = [];

  //Controla a apresentacao de elementos da tele
  controlaSelecaoCachorro: boolean[] = []; //Controla a apresentacao das patinhas que representam os cachorros selecionados

  constructor() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.requerimento = navigation.extras.state['requerimento'];
    }

    //Preenche a lista de cachorros com os cachorros do requerimento
    this.requerimento.caesRequeridos.forEach(cachorro => {
      this.cachorros.push(cachorro);
      this.cachorrosSelecionados.push(cachorro);
      this.controlaSelecaoCachorro.push(true); //Todos os cachorros devem estar selecionados
    })
  
    this.buscarTutores();//Faz a requisicao de tutores para popular a lista de selecao de tutores
    this.buscarCachorros();//Faz a requisicao de cachorros para popular a lista de selecao de cachorros
  }

  enviarRequerimento(){

    //Preenche o objeto requerimento com todos os dados
    this.requerimento.caesRequeridos = this.cachorrosSelecionados;
    this.requerimento.autorDoRequerimento = this.tutores.find(tutor => tutor.nome == this.tutorSelecionado)!;

    //Verifica se o tutor foi selecionado
    if(this.requerimento.autorDoRequerimento == undefined) {
      alert('Selecione um tutor');
      return;
    }

    this.requerimentoService.atualizar(this.requerimento).subscribe({
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

        //Adiciona os demais cachorros que estao na base de dados
        response.objeto.forEach(cachorro => {
          this.cachorros.push(cachorro);
          this.controlaSelecaoCachorro.push(false); //Todos os cachorros devem estar desselecionados
        });
      },
      error: (error: Resposta<Cachorro[]>) => {
        console.log(error);
      }
    })
  }

  primeiraLetraMaiuscula(str: string): string {
    str = str.toLocaleLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
