import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/auth/login.service';

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

  constructor() {
    if(this.loginService.hasPermission('USER')) {
      this.classTamanho = 'col-12';
    }
  }
}
