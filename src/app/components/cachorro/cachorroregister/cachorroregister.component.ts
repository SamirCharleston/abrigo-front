import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cachorro } from '../../../models/cachorro/cachorro';


@Component({
  selector: 'app-cachorroregister',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule],
  templateUrl: './cachorroregister.component.html',
  styleUrl: './cachorroregister.component.scss'
})
export class CachorroregisterComponent {
  router2 = inject(Router);
 

  cachorro: Cachorro = new Cachorro();



  save(){
    if(this.cachorro.nome){
      alert(`Editado com sucesso`);
      this.router2.navigate([`/cachorro/list`], {state: {cachorroEditado: this.cachorro}  });
  
      }else{
      alert(`Salvo com sucesso`);
      this.router2.navigate([`/cachorro/list`],  {state: {cachorroNovo: this.cachorro}  });   
    }
  }

}