<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutor } from '../../models/tutor/tutor';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutor } from '../../models/tutor/tutor';
import { Resposta } from '../../models/resposta/resposta';
>>>>>>> 90fe26e03f4ffab72ef875520ab01aa02d940380

@Injectable({
  providedIn: 'root'
})
export class TutorService {
<<<<<<< HEAD
  private apiUrl = 'http://localhost:8080/api/tutor'; // Altere para a URL do seu back-end

  constructor(private http: HttpClient) { }

  getAllTutors(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/listar');
  }

  deleteTutor(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/deletar?id=' + id);
=======
  http = inject(HttpClient)

  APi = 'http://localhost:8080/api/tutor'

  constructor() { }

  findAll(): Observable<Resposta<Tutor[]>> {
    return this.http.get<Resposta<Tutor[]>>(this.APi + "/listar");
>>>>>>> 90fe26e03f4ffab72ef875520ab01aa02d940380
  }
}
