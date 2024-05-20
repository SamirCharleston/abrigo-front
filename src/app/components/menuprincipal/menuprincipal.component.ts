import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuprincipal',
  standalone: true,
  imports: [],
  templateUrl: './menuprincipal.component.html',
  styleUrl: './menuprincipal.component.scss'
})
export class MenuprincipalComponent {
  router = inject(Router);
}
