import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Resposta } from '../../models/resposta/resposta';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario/usuario';
import { UsuarioAutenticado } from '../../models/usuario/usuario-autenticado';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private http = inject(HttpClient)

  private API = 'http://localhost:8080/api/usuario'

  constructor() { }

  registrar(usuario: Usuario): Observable<Resposta<number>> {
    return this.http.post<Resposta<number>>(this.API + "/cadastrar", usuario);
  }

  autenticar(usuario: Usuario): Observable<Resposta<UsuarioAutenticado>> {
    return this.http.post<Resposta<UsuarioAutenticado>>(this.API + "/autenticar", usuario);
  }
}
