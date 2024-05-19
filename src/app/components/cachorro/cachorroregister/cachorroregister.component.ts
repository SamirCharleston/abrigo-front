import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

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
  this.router.navigate(['/menu']); 
}
}