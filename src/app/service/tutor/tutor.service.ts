import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutor } from '../../models/tutor/tutor';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  private apiUrl = 'http://localhost:8080/api/tutor'; // Altere para a URL do seu back-end

  constructor(private http: HttpClient) { }

  getAllTutors(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/listar');
  }

  deleteTutor(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/deletar?id=' + id);
  }
}
