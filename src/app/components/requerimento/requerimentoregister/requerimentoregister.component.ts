import { Component, inject } from '@angular/core';
import { Requerimento } from '../../../models/requerimento/requerimento';
import { Tutor } from '../../../models/tutor/tutor';
import { FormsModule } from '@angular/forms';
import { TutorService } from '../../../service/tutor/tutor.service';
import { Resposta } from '../../../models/resposta/resposta';

@Component({
  selector: 'app-requerimentoregister',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './requerimentoregister.component.html',
  styleUrl: './requerimentoregister.component.scss'
})
export class RequerimentoregisterComponent {
  tutores: Tutor[] = [];
  tutorSelecionado!: string;
  requerimento: Requerimento = new Requerimento();
  tutorService = inject(TutorService);

  constructor() { 
    this.requerimento.autorDoRequerimento = new Tutor();
    this.requerimento.caesRequeridos = [];
  
    this.buscarTutores();//Faz a requisicao de tutores para popular a lista de selecao de tutores
  }

  buscarTutores() {
    this.tutorService.findAll().subscribe({
      next: (response: Resposta<Tutor[]>) => {
        this.tutores = response.objeto;
      },
      error: (error: Resposta<Tutor[]>) => {
        console.log(error);
      }
    })
  }
}
