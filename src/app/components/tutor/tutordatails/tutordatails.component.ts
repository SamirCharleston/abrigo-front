import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Tutor } from '../../../models/tutor/tutor';

@Component({
  selector: 'app-tutordatails',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutordatails.component.html',
  styleUrl: './tutordatails.component.scss'
})
export class TutordatailsComponent {
  router: any;

  voltar(): void {
    // Implementar a lógica de navegação de retorno aqui
    console.log('Voltar à lista de tutores');
    
  }
  

}