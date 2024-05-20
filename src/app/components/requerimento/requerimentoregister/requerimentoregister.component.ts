import { Component, inject } from '@angular/core';
import { Requerimento } from '../../../models/requerimento/requerimento';
import { Tutor } from '../../../models/tutor/tutor';
import { FormsModule } from '@angular/forms';

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

  constructor() { 
    this.requerimento.autorDoRequerimento = new Tutor();
    this.requerimento.caesRequeridos = [];
  }

}
