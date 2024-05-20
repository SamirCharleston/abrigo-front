import { Component, inject } from '@angular/core';
import { Requerimento } from '../../../models/requerimento/requerimento';
import { RequerimentoService } from '../../../service/requerimento/requerimento.service';
import { Resposta } from '../../../models/resposta/resposta';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';

@Component({
  selector: 'app-requerimentolist',
  standalone: true,
  imports: [MdbAccordionModule],
  templateUrl: './requerimentolist.component.html',
  styleUrl: './requerimentolist.component.scss'
})
export class RequerimentolistComponent {
  requerimentoService = inject(RequerimentoService);
  requerimentos!: Requerimento[];

  constructor() {
    this.requerimentoService.listarRequerimentos().subscribe({
      next: (response: Resposta<Requerimento[]>) => {
        this.requerimentos = response.objeto;
      },
      error: (error: Resposta<Requerimento[]>) => {
        console.log(error);
      }
    })
  }


}
