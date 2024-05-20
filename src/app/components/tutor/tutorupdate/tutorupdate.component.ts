import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Tutor } from '../../../models/tutor/tutor';
import { ActivatedRoute, Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-tutorupdate',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule],
  templateUrl: './tutorupdate.component.html',
  styleUrls: ['./tutorupdate.component.scss'],
  
})
export class TutorupdateComponent{
  tutor: Tutor = new Tutor("",0, "", 0);

  router = inject(ActivatedRoute);
  router2 = inject(Router);

  constructor() {
    let nome = this.router.snapshot.params[`nome`];
    if (nome ) {
      this.findById(nome);
    }
  }

  findById(nome: String) {
    // Simulando uma busca no back-end
    let tutorRetornado: Tutor = new Tutor("joao",0, "", 25,); // Exemplo sem a requisição HTTP
    this.tutor = tutorRetornado;
  }

  save() {
    if(this.tutor.Nome){
    alert(`Editado com sucesso`);
    this.router2.navigate([`/tutors`], {state: {tutorEditado: this.tutor}  });

    }else{
    alert(`Salvo com sucesso`);
    this.router2.navigate([`/tutors`],  {state: {tutorNovo: this.tutor}  });   
  }
}
}