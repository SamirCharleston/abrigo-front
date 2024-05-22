import { Component, Input, NgModule, inject, input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Cachorro } from '../../../models/cachorro/cachorro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CachorroService } from '../../../service/cachorro/cachorro.service';
import { Resposta } from '../../../models/resposta/resposta';

@Component({
  selector: 'app-cachorroupdate',
  standalone: true,
  imports: [FormsModule, CommonModule, MdbFormsModule],
  templateUrl: './cachorroupdate.component.html',
  styleUrl: './cachorroupdate.component.scss'
})

export class CachorroupdateComponent{

  @Input('id') id!: number;

cachorro!: Cachorro;
cachorroService = new CachorroService();

constructor(){
  this.cachorroService.findById(this.id).subscribe({
    next: (resposta: Resposta<Cachorro>) => {
      this.cachorro = resposta.objeto;
    },
    error: (erro: any) => {
      alert(erro.error.mensagem);
    }
  })
}

save() {
    this.cachorroService.update(this.cachorro).subscribe({
      next: (response: Resposta<void>) => {
        alert(response.mensagem);
      },
      error: (error: any) => {
        alert(error.error.mensagem);
      }
    })
}
}