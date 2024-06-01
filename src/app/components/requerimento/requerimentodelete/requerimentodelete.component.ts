import { Component, inject } from '@angular/core';
import { Requerimento } from '../../../models/requerimento/requerimento';
import { Router } from '@angular/router';
import { RequerimentoService } from '../../../service/requerimento/requerimento.service';
import { Resposta } from '../../../models/resposta/resposta';

@Component({
  selector: 'app-requerimentodelete',
  standalone: true,
  imports: [],
  templateUrl: './requerimentodelete.component.html',
  styleUrl: './requerimentodelete.component.scss'
})
export class RequerimentodeleteComponent {
  router = inject(Router);
  requerimento!: Requerimento;
  requerimentoService = inject(RequerimentoService);

  constructor() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.requerimento = navigation.extras.state['requerimento'];
    }
  }

  primeiraLetraMaiuscula(str: string): string {
    str = str.toLocaleLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  confirmarExclusao() {
    this.requerimentoService.deletar(this.requerimento.id).subscribe({
      next: (response: Resposta<void>) => {
        alert(response.mensagem);
        this.router.navigate(['home/requerimentos']);
      },
      error: (error: any) => {
        alert(error.error.mensagem);
      }
    })
  }
}
