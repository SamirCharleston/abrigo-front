import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Tutor } from '../../../models/tutor/tutor';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorService } from '../../../service/tutor/tutor.service';
import { Resposta } from '../../../models/resposta/resposta';

@Component({
  selector: 'app-tutorupdate',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule],
  templateUrl: './tutorupdate.component.html',
  styleUrls: ['./tutorupdate.component.scss'],
})
export class TutorupdateComponent implements OnInit {
  tutor: Tutor = new Tutor();
  router2 = inject(Router);
  idade!: string;
  tutorService = inject(TutorService);
  router = inject(ActivatedRoute);

  constructor(){
    //this.tutor = this.findById()
  }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    if (id) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.tutorService.findById(id).subscribe({
      next: (resposta: Resposta<Tutor>) => {
        this.tutor = resposta.objeto;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

    save(tutor : Tutor) {
    
      this.tutorService.update(tutor).subscribe({
        next: (resposta: Resposta<void>) => {
          alert(resposta.mensagem);
          this.router2.navigate(['home/tutors/list']);
        },
        error: (error: any) => {
            alert(error.error.mensagem);
          }
      });
    }

  voltar(): void {
    this.router2.navigate(['home/tutors/list']);
  }
}
