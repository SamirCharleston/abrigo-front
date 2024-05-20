import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Tutor } from '../../../models/tutor/tutor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorupdate',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule],
  templateUrl: './tutorupdate.component.html',
  styleUrls: ['./tutorupdate.component.scss'],
  template: `
  <form>
    <label for="testNome">Nome</label>
    <input type="text" id="testNome" class="form-control" name="testNome" [(ngModel)]="nome" placeholder="Digite seu nome" />
  </form>
`
})
export class TutorupdateComponent implements OnInit {
  tutor: Tutor = new Tutor("",0, "", 0);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const nome = this.route.snapshot.params['Nome'];
    if (nome) {
      this.findById(nome);
    }
  }

  findById(nome: string) {
    // Simulando uma busca no back-end
    const tutorRetornado: Tutor = new Tutor(nome,0, "", 25,); // Exemplo sem a requisição HTTP
    this.tutor = tutorRetornado;
  }

  save() {
    // Lógica para salvar
  }
}
