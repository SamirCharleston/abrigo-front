import { Component, TemplateRef, ViewChild, inject, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Tutor } from '../../../models/tutor/tutor';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-tutorlist',
  standalone: true,
  imports: [MdbFormsModule, RouterLink],
  templateUrl: './tutorlist.component.html',
  styleUrl: './tutorlist.component.scss'
})
export class TutorlistComponent {
  




deleteById(tutor: Tutor) {
  if(confirm("Tem certeza que deseja deletar?") ){
    let indice =this.listas.findIndex(x => {return x.Nome == tutor.Nome});
    this.listas.splice(indice, 1);
  }
}
  

listas: Tutor[] = [];

constructor() {

  this.listas.push(new Tutor(`joao`, 99172570,"rua sergipe,75", 17));
  this.listas.push(new Tutor(`fernando`, 99990088,"rua natal, 88", 21));
  this.listas.push(new Tutor(`jackson`, 99887766,"rua mila,88", 30));
   
  let tutorNovo = history.state.tutorNovo;
  let tutorEditado = history.state.tutorEditado;

  if(tutorNovo){
    tutorNovo.nome = "joao";
    this.listas.push(tutorNovo);

  }

  if(tutorEditado){
    let indice =this.listas.findIndex(x => {return x.Nome == tutorEditado.nome});
    this.listas[indice] = tutorEditado;

  }

}



}
