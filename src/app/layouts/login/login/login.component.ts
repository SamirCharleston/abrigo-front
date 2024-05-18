import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  usuario!: string;
  senha!: string;

  router = inject(Router);

  logar() {
    if (this.usuario == 'admin' && this.senha == 'admin') {
      this.router.navigate(['/home']);
    } else
      alert('Usuário ou senha estão incorretos!');
  }
}
