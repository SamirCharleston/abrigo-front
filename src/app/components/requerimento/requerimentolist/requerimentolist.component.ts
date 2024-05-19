import { Component } from '@angular/core';
import { Requerimento } from '../../../models/requerimento/requerimento';
import { Tutor } from '../../../models/tutor/tutor';
import { Cachorro } from '../../../models/cachorro/cachorro';

@Component({
  selector: 'app-requerimentolist',
  standalone: true,
  imports: [],
  templateUrl: './requerimentolist.component.html',
  styleUrl: './requerimentolist.component.scss'
})
export class RequerimentolistComponent {
  requerimentos!: Requerimento[];

  constructor() {
  }
}
