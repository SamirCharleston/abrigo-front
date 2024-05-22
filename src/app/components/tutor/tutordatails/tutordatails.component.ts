import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Tutor } from '../../../models/tutor/tutor';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-tutordatails',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutordatails.component.html',
  styleUrl: './tutordatails.component.scss'
})
export class TutordatailsComponent {
  router2 = inject(Router);
  

  voltar(): void {
    // Implementar a lógica de navegação de retorno aqui
    this.router2.navigate([`/tutors`]);
    
  }
  

}