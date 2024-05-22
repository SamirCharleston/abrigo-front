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

  API = 'http://localhost:8080/api/tutor'

  constructor() { }
  
  findAll(): Observable<Resposta<Tutor[]>> {
    return this.http.get<Resposta<Tutor[]>>(this.API + "/listar");
  }

  findById(id: number): Observable<Resposta<Tutor>> {
    return this.http.get<Resposta<Tutor>>(`${this.API}/buscar-id`, { params: { id } });
  }

  save(tutor: Tutor): Observable<Resposta<void>>{
    return this.http.post<Resposta<void>>(this.API + "/cadastrar", tutor);
  }

  delete(id: number): Observable<Resposta<void>>{
    return this.http.delete<Resposta<void>>(this.API + "/deletar", { params: { id } });
  }

  update(tutor: Tutor): Observable<Resposta<void>>{
    return this.http.put<Resposta<void>>(this.API + "/atualizar", tutor);
  }
  
}