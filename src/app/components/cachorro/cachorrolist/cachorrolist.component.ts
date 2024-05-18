import { Component } from '@angular/core';
import { CachorroService } from '../../../service/cachorro/cachorro.service';
import { Cachorro } from '../../../models/cachorro/cachorro';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cachorrolist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cachorrolist.component.html',
  styleUrl: './cachorrolist.component.scss'
})
export class CachorrolistComponent {
  service: CachorroService = new CachorroService();
  cachorros: Cachorro[] = [];

  constructor() {
    this.service.listarCachorros().subscribe({
      next: (cachorros) => {
        this.cachorros = cachorros;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
