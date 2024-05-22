import { Component, OnInit,inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Tutor } from '../../../models/tutor/tutor';
import { TutorService } from '../../../service/tutor/tutor.service';
import { Resposta } from '../../../models/resposta/resposta';


@Component({
  selector: 'app-tutorlist',
  standalone: true,
  imports: [MdbFormsModule, RouterLink],
  templateUrl: './tutorlist.component.html',
  styleUrls: ['./tutorlist.component.scss']
})
export class TutorlistComponent implements OnInit {
  router = inject(Router);
  tutor: Tutor = new Tutor();
  listas: Tutor[] = [];

  constructor(private tutorService: TutorService) {} // Injetar o serviço

  ngOnInit() {
    this.listAll(); // Carregar a lista de tutores ao inicializar
  }

  listAll() {
    this.tutorService.findAll().subscribe(
      (resposta: Resposta<Tutor[]>) => {
        this.listas = resposta.objeto;
      },
      (error: any) => {
        console.log(error.error.mensagem);
      }
    );
  }

  deleteById(tutorId: number): void {
    if(confirm("Tem certeza que deseja deletar este tutor?")) {
      this.tutorService.delete(tutorId).subscribe(
        (resposta: Resposta<void>) => {
          alert('Tutor deletado com sucesso!');
          // Adicione lógica adicional aqui, como atualizar a lista de tutores
        },
        (error) => {
          console.error('Erro ao deletar tutor', error);
          alert('Ocorreu um erro ao deletar o tutor. Por favor, tente novamente.');
        }
      );
    }
  }
}
