import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Resposta } from '../../models/resposta/resposta';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Tutor } from '../../models/tutor/tutor';
  @Injectable({
    providedIn: 'root'
  })
  export class TutorService {
    private http = inject(HttpClient)

    private API = environment.SERVIDOR + "/api/tutor";

    constructor() { }
    
    findAll(audit: boolean = false): Observable<Resposta<Tutor[]>> {
      return this.http.get<Resposta<Tutor[]>>(this.API + "/listar?audit=" + audit);
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

    update(tutor: Tutor): Observable<Resposta<void>> {
      return this.http.put<Resposta<void>>(`${this.API}/atualizar`, tutor);
    }
    
  }