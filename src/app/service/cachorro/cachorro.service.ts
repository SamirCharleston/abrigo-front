import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cachorro } from '../../models/cachorro/cachorro';
import { Resposta } from '../../models/resposta/resposta';

@Injectable({
  providedIn: 'root'
})

export class CachorroService {
  http = inject(HttpClient);

  API = 'http://localhost:8080/api/cachorro';
  
  constructor() { }

  listarCachorros(): Observable<Resposta<Cachorro[]>> {
    return this.http.get<Resposta<Cachorro[]>>(this.API + "/listar");
  }
}
