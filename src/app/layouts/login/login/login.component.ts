import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { Usuario } from '../../../models/usuario/usuario';
import { Resposta } from '../../../models/resposta/resposta';
import { UsuarioAutenticado } from '../../../models/usuario/usuario-autenticado';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  nome!: string;
  senha!: string;
  usuario: Usuario = new Usuario();

  logado = false;//Apresenta o osso animado na tela

  usuarioService = inject(UsuarioService);

  router = inject(Router);

  logar() {
    //Faz a validacao dos campos para verificar se foram todos preenchidos
    if(this.nome == '' || this.senha == '') {
      alert('Preencha todos os campos!');
      return;
    }

    //Passa o valor dos campos para o usuario que sera autenticado
    this.usuario.nome = this.nome;
    this.usuario.senha = this.senha;

    //Limpa os campos para se caso voltar na pagina os campos ficam limpos
    this.nome = '';
    this.senha = '';

    //Envia o usuario para o backend para autenticacao, caso for bem sucedido
    //retorna um codigo de autenticacao
    this.usuarioService.autenticar(this.usuario).subscribe({
      next: (response: Resposta<UsuarioAutenticado>) => {
        sessionStorage.setItem('nomeDoUsuario', response.objeto.nome);
        this.logado = true;
        setTimeout(() => {
          this.router.navigate(['/home']);
        },800)
      },
      error: (error: Resposta<UsuarioAutenticado>) => {
        alert('Houve um problema ao autenticar!');
      }
    })
  }
}
