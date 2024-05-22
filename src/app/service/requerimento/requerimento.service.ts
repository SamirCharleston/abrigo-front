import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Resposta } from '../../models/resposta/resposta';
import { Requerimento } from '../../models/requerimento/requerimento';

@Injectable({
  providedIn: 'root'
})
export class RequerimentoService {

  private http = inject(HttpClient);

  private API = 'http://localhost:8080/api/requerimento'

  constructor() { }

  findById(id: number): Observable<Resposta<Requerimento>> {
    return this.http.get<Resposta<Requerimento>>(`${this.API}/buscar-id`, { params: { id } });
  }

  listarRequerimentos(): Observable<Resposta<Requerimento[]>> {
    return this.http.get<Resposta<Requerimento[]>>(this.API + "/listar");
  }

  registrar(requerimento: Requerimento): Observable<Resposta<void>> {
    return this.http.post<Resposta<void>>(this.API + "/cadastrar", requerimento);
  }

  atualizar(requerimento: Requerimento): Observable<Resposta<void>> {
    return this.http.put<Resposta<void>>(this.API + "/atualizar", requerimento);
  }

  deletar(id: number): Observable<Resposta<void>> {
    return this.http.delete<Resposta<void>>(this.API + "/deletar", { params: { id } });
  }
}
