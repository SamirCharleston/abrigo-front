import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tutor } from '../../../models/tutor/tutor';
import { TutorService } from '../../../service/tutor/tutor.service';
import { Resposta } from '../../../models/resposta/resposta';

@Component({
  selector: 'app-tutorregister',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule],
  templateUrl: './tutorregister.component.html',
  styleUrl: './tutorregister.component.scss'
})
export class TutorregisterComponent {
  
  router2 = inject(Router);
 

  tutor: Tutor = new Tutor();
  idade!: string;
  tutorService = new TutorService();

  constructor() {
  
  }

  save(){
  
      this.tutorService.save(this.tutor).subscribe({
        next: (resposta: Resposta<void>) => {
          alert(resposta.mensagem);
          this.router2.navigate(["home/tutors/list"]);
        },
        error: (error: any) => {
          alert(error.error.mensagem);
        }
      }
      )

      this.router2.navigate([`/tutors`], {state: {tutorNovo: this.tutor}  });
  }

  voltar(): void {
    // Implementar a lógica de navegação de retorno aqui
    this.router2.navigate(["home/tutors/list"]); 
  }

}