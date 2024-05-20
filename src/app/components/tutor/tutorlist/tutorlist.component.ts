import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Tutor } from '../../../models/tutor/tutor';

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
    let indice =this.listas.findIndex(x => {return x.Nome == tutor.Nome})
    this.listas.splice(indice, 1);
  }
}
  

listas: Tutor[] = [];

constructor() {
  this.listas.push(new Tutor(`joao`, 99172570,"rua sergipe,75", 17));
  this.listas.push(new Tutor(`fernando`, 99990088,"rua natal, 88", 21));
  this.listas.push(new Tutor(`jackson`, 99887766,"rua mila,88", 30));
}



}
