import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { CachorrolistComponent } from '../cachorrolist/cachorrolist.component';
import { RequerimentolistComponent } from '../../requerimento/requerimentolist/requerimentolist.component';
import { TutorlistComponent } from '../../tutor/tutorlist/tutorlist.component';

@Component({
  selector: 'app-cachorroupdate',
  standalone: true,
  imports: [MdbFormsModule],
  templateUrl: './cachorroupdate.component.html',
  styleUrl: './cachorroupdate.component.scss'
})

export class CachorroupdateComponent{
  cachorro: any = {
    Nome:'',
    Raca:'',
    Idade:'',
    Porte:'',
    DataAdocao:'',
    observacao:''
  
  };

  constructor(private router: Router) {}

onSubmit(): void {
  
  console.log('Alteração feita com sucesso:', this.cachorro);

  this.router.navigate(['/cachorros']);
}

onCancel(): void {
  this.router.navigate(['/menu-principal']); 
}
}

const routes: Routes = [
  { path: 'cachorro', component: CachorrolistComponent },
  { path: 'requerimentolist', component: RequerimentolistComponent },
  { path: 'tutors', component: TutorlistComponent }
];