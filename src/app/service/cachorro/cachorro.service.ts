import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cachorro } from '../../models/cachorro/cachorro';
import { Resposta } from '../../models/resposta/resposta';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CachorroService {
  private http = inject(HttpClient);

  private API = environment.SERVIDOR + "/api/cachorro";
  
  constructor() { }

  listarCachorros(audit: boolean = false): Observable<Resposta<Cachorro[]>> {
    return this.http.get<Resposta<Cachorro[]>>(this.API + "/listar?audit=" + audit);
  }

    findById(id: number): Observable<Resposta<Cachorro>>{
      return this.http.get<Resposta<Cachorro>>(this.API + "/buscar-id", {params: {id}});
    }
  
    save(cachorro: Cachorro): Observable<Resposta<void>>{
      return this.http.post<Resposta<void>>(this.API + "/cadastrar", cachorro);
    }
  
    delete(id: number): Observable<Resposta<void>>{
      return this.http.delete<Resposta<void>>(this.API + "/deletar", { params: { id } });
    }
  
    update(cachorro: Cachorro): Observable<Resposta<void>>{
      return this.http.put<Resposta<void>>(this.API + "/atualizar", cachorro);
    }

}
