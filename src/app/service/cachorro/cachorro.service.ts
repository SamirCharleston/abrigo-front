import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cachorro } from '../../models/cachorro/cachorro';

@Injectable({
  providedIn: 'root'
})

export class CachorroService {
  http = inject(HttpClient);

  API = 'http://localhost:8080/api/cachorro';
  
  constructor() { }

  listarCachorros(): Observable<Cachorro[]> {
    return this.http.get<Cachorro[]>(this.API + "/listar");
  }
}
