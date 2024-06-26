import { Component, Input, Output, inject, input } from '@angular/core';
import { Requerimento } from '../../models/requerimento/requerimento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termo-de-responsabilidade',
  standalone: true,
  imports: [],
  templateUrl: './termo-de-responsabilidade.component.html',
  styleUrl: './termo-de-responsabilidade.component.scss'
})
export class TermoDeResponsabilidadeComponent {
  @Input('requerimento') requerimento!: Requerimento;
  @Output('exibeTermoResponsabilidade') exibirTermoResponsabilidade: boolean = true;
  router = inject(Router);
  
  data!: string;

  constructor() {
    this.data = this.dataFormatada();
  }
  imprimirTermo() {
      //pega o Html da DIV
      var conteudoParaImprimir = document.getElementById("termo-de-responsabilidade")?.innerHTML;
      //pega o HTML de toda tag Body
      var paginaAntiga = document.body.innerHTML;

      //Alterna o body 
      document.body.innerHTML = 
        '<html style="background-color: black"><head><title></title></head><body>' + 
        conteudoParaImprimir + "</body>";

      //Imprime o body atual
      window.print();

      document.body.innerHTML = paginaAntiga;
      window.location.reload();//Reinicia a página
  }


  //Retorna a data em formato dd/mm/aaaa
  dataFormatada(): string {
    let dia: string = new Date().getDate().toString();
    let mes = (new Date().getMonth() + 1).toString();
    let ano = new Date().getFullYear().toString();
    if(dia.length == 1) {
      dia = '0' + dia;
    }
    if(mes.length == 1) {
      mes = '0' + mes;
    }
    return dia + '/' + mes + '/' + ano;
  }

  voltar(){ 
    this.router.navigate(['/home/requerimentos']);
  }

  //Recebe a string e transforma somente a primeira letra em maiuscula
  primeiraLetraMaiuscula(str: string): string {
    str = str.toLocaleLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
