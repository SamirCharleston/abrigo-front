import { Component, inject } from '@angular/core';
import { TutorService } from '../../../service/tutor/tutor.service';
import { Tutor } from '../../../models/tutor/tutor';
import { Resposta } from '../../../models/resposta/resposta';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';

@Component({
  selector: 'app-tutores',
  standalone: true,
  imports: [MdbAccordionModule],
  templateUrl: './tutores.component.html',
  styleUrl: './tutores.component.scss'
})
export class TutoresComponent {
  tutorService = inject(TutorService);

  tutores: Tutor[] = [];

  constructor() {
    this.tutorService.findAll().subscribe({
      next: (response: Resposta<Tutor[]>) => {
        this.tutores = response.objeto;
      },
      error: (error: Resposta<Tutor[]>) => {
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
