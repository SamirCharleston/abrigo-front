import { Component, TemplateRef, ViewChild, inject, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Tutor } from '../../../models/tutor/tutor';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { TutorService } from '../../../service/tutor/tutor.service';
import { Resposta } from '../../../models/resposta/resposta';

@Component({
  selector: 'app-tutorlist',
  standalone: true,
  imports: [MdbFormsModule, RouterLink],
  templateUrl: './tutorlist.component.html',
  styleUrl: './tutorlist.component.scss'
})
export class TutorlistComponent {
  router = inject(Router);
  
  listas: Tutor[] = [];
  tutorService = new TutorService();

  constructor() {
    this.tutorService.findAll().subscribe(
      (resposta: Resposta<Tutor[]>) => {
        this.listas = resposta.objeto
      },
      (error: any) => {
        console.log(error.error.mensagem);
      }
    )
  }

  deleteById(tutor: Tutor){}

}
