import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-generico',
  standalone: true,
  imports: [],
  templateUrl: './modal-generico.component.html',
  styleUrl: './modal-generico.component.scss'
})
export class ModalGenericoComponent {
  @Input() exibirModal!: boolean;
  @Output() exibirModalChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onValorChange(newValue: boolean) {
    this.exibirModalChange.emit(newValue);
  }
  titulo: string = 'Titulo do modal';

  fecharModal() {
    this.exibirModal = false;
  }
}
