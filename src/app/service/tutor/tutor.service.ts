import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutor } from '../../models/tutor/tutor';
import { Resposta } from '../../models/resposta/resposta';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  http = inject(HttpClient)

  APi = 'http://localhost:8080/api/tutor'

  constructor() { }

  findAll(): Observable<Resposta<Tutor[]>> {
    return this.http.get<Resposta<Tutor[]>>(this.APi + "/listar");
  }
}
