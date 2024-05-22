import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cachorro } from '../../../models/cachorro/cachorro';
import { CachorroService } from '../../../service/cachorro/cachorro.service';
import { Resposta } from '../../../models/resposta/resposta';


@Component({
  selector: 'app-cachorroregister',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule],
  templateUrl: './cachorroregister.component.html',
  styleUrl: './cachorroregister.component.scss'
})
export class CachorroregisterComponent {
  router = inject(Router);
  cachorroService = new CachorroService();

  cachorro: Cachorro = new Cachorro();
  
  constructor() {
    this.cachorro.porte = "PEQUENO";
  }

  save(){
    this.cachorro.porte = this.cachorro.porte.toUpperCase(); 
    this.cachorroService.save(this.cachorro).subscribe({
      next: (resposta: Resposta<void>) => {
        alert("Salvo com sucesso!");
        this.router.navigate(['home/cachorro/list']);
      },
      error: (error: any) => {
        alert(error.error.mensagem);
      }
    })
  }

}