import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { CachorrolistComponent } from '../cachorrolist/cachorrolist.component';
import { RequerimentolistComponent } from '../../requerimento/requerimentolist/requerimentolist.component';
import { TutorlistComponent } from '../../tutor/tutorlist/tutorlist.component';

@Component({
  selector: 'app-cachorroregister',
  standalone: true,
  imports: [MdbFormsModule],
  templateUrl: './cachorroregister.component.html',
  styleUrl: './cachorroregister.component.scss'
})

export class CachorroregisterComponent{
  cachorro: any = {
    Nome:'',
    Raca:'',
    Idade:'',
    Porte:'',
    observacao:''
  
  };

  constructor(private router: Router) {}

onSubmit(): void {
  
  console.log('Cachorro registrado:', this.cachorro);

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