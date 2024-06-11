import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { Usuario } from '../../../models/usuario/usuario';
import { Resposta } from '../../../models/resposta/resposta';
import { UsuarioAutenticado } from '../../../models/usuario/usuario-autenticado';
import { Login } from '../../../service/auth/login';
import { LoginService } from '../../../service/auth/login.service';

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
  login: Login = new Login();

  logado = false;//Apresenta o osso animado na tela

  loginService = inject(LoginService);

  router = inject(Router);

  constructor(){
    localStorage.clear();
  }

  logar() {
    //Faz a validacao dos campos para verificar se foram todos preenchidos
    if(this.nome == '' || this.senha == '') {
      alert('Preencha todos os campos!');
      return;
    }

    //Passa o valor dos campos para o usuario que sera autenticado
    this.login.username = this.nome;
    this.login.password = this.senha;

    //Limpa os campos para se caso voltar na pagina os campos ficam limpos
    this.nome = '';
    this.senha = '';

    //Envia o usuario para o backend para autenticacao, caso for bem sucedido
    //retorna um codigo de autenticacao
    this.loginService.logar(this.login).subscribe({
      next: (token: string) => {
        this.loginService.addToken(token);
        // this.loginService.jwtDecode()
        sessionStorage.setItem('nomeDoUsuario', "Nome fixo");
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
