import { Component, inject } from '@angular/core';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { Cachorro } from '../../../models/cachorro/cachorro';
import { CachorroService } from '../../../service/cachorro/cachorro.service';
import { Resposta } from '../../../models/resposta/resposta';

@Component({
  selector: 'app-cachorros',
  standalone: true,
  imports: [MdbAccordionModule],
  templateUrl: './cachorros.component.html',
  styleUrl: './cachorros.component.scss'
})
export class CachorrosComponent {
  cachorroService = inject(CachorroService);

  cachorros: Cachorro[] = [];

  constructor() {
    this.cachorroService.listarCachorros(true).subscribe({
      next: (response: Resposta<Cachorro[]>) => {
        this.cachorros = response.objeto;
      },
      error: (error: Resposta<Cachorro[]>) => {
        console.log(error);
      }
    })
  }

  primeiraLetraMaiuscula(str: string): string {
    if(!str) {
      return '';
    }
    str = str.toLocaleLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  dataFormatada(data: Date): string {
    if(data == null) {
      return '';
    }
    data = new Date(data);

    let dia = data.getDate().toString();
    let mes = (data.getMonth() + 1).toString();
    let ano = data.getFullYear().toString();
    let hora = data.getHours().toString();
    let minuto = data.getMinutes().toString();
    let segundo = data.getSeconds().toString();
    if (dia.length == 1) {
      dia = '0' + dia;
    }
    if (mes.length == 1) {
      mes = '0' + mes;
    }

    return hora + ':' + minuto + ':' + segundo + ' ' + dia + '/' + mes + '/' + ano;
  }
}
