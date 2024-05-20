import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tutor } from '../../../models/tutor/tutor';

@Component({
  selector: 'app-tutorregister',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule],
  templateUrl: './tutorregister.component.html',
  styleUrl: './tutorregister.component.scss'
})
export class TutorregisterComponent {
 

  tutor: Tutor = new Tutor("",0,"",0);



  save(){
  //
  }

}