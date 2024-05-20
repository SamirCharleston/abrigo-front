<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutor } from '../../models/tutor/tutor';
import { Resposta } from '../../models/resposta/resposta';
=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutor } from '../../models/tutor/tutor';
>>>>>>> 588ddd17933b773655032b1f671e1b8783a39021

@Injectable({
  providedIn: 'root'
})
export class TutorService {
<<<<<<< HEAD
  http = inject(HttpClient)

  APi = 'http://localhost:8080/api/tutor'

  constructor() { }

  findAll(): Observable<Resposta<Tutor[]>> {
    return this.http.get<Resposta<Tutor[]>>(this.APi + "/listar");
=======
  private apiUrl = 'http://localhost:8080/api/tutor'; // Altere para a URL do seu back-end

  constructor(private http: HttpClient) { }

  getAllTutors(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/listar');
  }

  deleteTutor(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/deletar?id=' + id);
>>>>>>> 588ddd17933b773655032b1f671e1b8783a39021
  }
}
