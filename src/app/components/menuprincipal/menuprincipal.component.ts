import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/auth/login.service';
import { AuthorizationFor } from '../../service/auth/authorizationFor';

@Component({
  selector: 'app-menuprincipal',
  standalone: true,
  imports: [],
  templateUrl: './menuprincipal.component.html',
  styleUrl: './menuprincipal.component.scss'
})
export class MenuprincipalComponent {
  router = inject(Router);
  loginService = inject(LoginService);

  classTamanho = 'col-6';
  ehResponsavel!: boolean;

  constructor() {
    this.ehResponsavel = this.loginService.hasPermission(AuthorizationFor.RESPONSAVEL);

    if(!this.ehResponsavel) {
      this.classTamanho = 'col-12';
    }
  }
}
