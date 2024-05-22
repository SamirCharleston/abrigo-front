import { Component, OnInit, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Tutor } from '../../../models/tutor/tutor';
import { ActivatedRoute, Router } from '@angular/router';
import { state } from '@angular/animations';
import { TutorService } from '../../../service/tutor/tutor.service';
import { Resposta } from '../../../models/resposta/resposta';

@Component({
  selector: 'app-tutorupdate',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule],
  templateUrl: './tutorupdate.component.html',
  styleUrls: ['./tutorupdate.component.scss'],
  
})
export class TutorupdateComponent{
  tutor: Tutor = new Tutor();
  router2 = inject(Router);
  idade!: string;
  tutorService = new TutorService();
  router = inject(ActivatedRoute);
  property: any;

  constructor() {


  }

  findById(id: number) {
    this.tutorService.findById(id).subscribe({
      next: (resposta: Resposta<Tutor>) => {
        this.tutor = resposta.objeto;
        // Display the tutor's information in the form for editing
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  save() {
    this.tutorService.update(this.tutor).subscribe({
      next: (resposta: Resposta<void>) => {
        alert(resposta.mensagem);
        this.router2.navigate(["home/tutors/list"]);
      },
      error: (error) => {
        console.log(error);
      } 
    })
  }

  


voltar(): void {
  // Implementar a lógica de navegação de retorno aqui
  this.router2.navigate(["home/tutors/list"]); 
}
}