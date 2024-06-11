import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Resposta } from '../../models/resposta/resposta';
import { Observable } from 'rxjs';
import { UsuarioAutenticado } from '../../models/usuario/usuario-autenticado';
import { Usuario } from '../auth/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private http = inject(HttpClient)

  private API = 'http://localhost:8080/api'

  constructor() { }

  registrar(usuario: Usuario): Observable<Resposta<string>> {
    return this.http.post<Resposta<string>>(this.API + "/register", usuario);
  }

  autenticar(usuario: Usuario): Observable<Resposta<UsuarioAutenticado>> {
    return this.http.post<Resposta<UsuarioAutenticado>>(this.API + "/login", usuario);
  }
}
