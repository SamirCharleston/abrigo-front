import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-tutorregister',
  standalone: true,
  imports: [MdbFormsModule],
  templateUrl: './tutorregister.component.html',
  styleUrl: './tutorregister.component.scss'
})
export class TutorregisterComponent {
  tutor: any = {
    name: '',
    contact: '',
    address: '',
    age: null

};

constructor(private router: Router) {}

onSubmit(): void {
  // Aqui, você pode adicionar a lógica para salvar o tutor (futuramente com um serviço)
  console.log('Tutor registrado:', this.tutor);
  // Após salvar, redirecione para a lista de tutores
  this.router.navigate(['/tutors']);
}

onCancel(): void {
  this.router.navigate(['/']); // Redireciona para a página inicial
}
}