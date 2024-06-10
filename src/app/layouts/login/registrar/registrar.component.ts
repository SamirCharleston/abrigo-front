import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { Resposta } from '../../../models/resposta/resposta';
import { Usuario } from '../../../service/auth/usuario';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [MdbFormsModule, FormsModule, CommonModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})
export class RegistrarComponent {
  nome: string = '';
  senha: string = '';
  confirmacaoDeSenha: string = '';
  router = inject(Router);
  usuarioService = inject(UsuarioService);
  usuario: Usuario = new Usuario();

  registrar() {
    //Faz a validacao dos campos para verificar se foram todos preenchidos
    //e se as senhas sao iguais
    if (this.nome == '' || this.senha == '' || this.confirmacaoDeSenha == '') {
      alert('Preencha todos os campos!');
      return;
    }
    if (this.senha !== this.confirmacaoDeSenha) {
      alert('As senhas precisam ser iguais!');
      return;
    }

    //Passa o valor dos campos para o usuario que sera enviado
    this.usuario.username = this.nome;
    this.usuario.password = this.senha;

    //Envia o usuario para o backend
    this.usuarioService.registrar(this.usuario).subscribe({
      next: (response: Resposta<number>) => {
        alert('Usário criado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (error: Resposta<string>) => {
        alert('Erro: ' + error.mensagem);
      }
    })
  }
}
