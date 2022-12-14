import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Laboratoire} from '../models/laboratoire';

@Injectable({
  providedIn: 'root'
})
export class LaboService {

  private baseURL = 'http://localhost:8080/laboratoires/';

  constructor(private httpClient: HttpClient) {
  }

  getLabolist(): Observable<Laboratoire[]> {
    return this.httpClient.get<Laboratoire[]>(`${this.baseURL + 'read'}`);
  }

  // tslint:disable-next-line:ban-types
  addLabo(laboratoire: Laboratoire): Observable<Laboratoire> {
    return this.httpClient.post(`${this.baseURL + 'create'}`, laboratoire);
  }

  // tslint:disable-next-line:ban-types
  delLabo(id: number): Observable<Laboratoire> {
    return this.httpClient.delete<Laboratoire>(`${this.baseURL + 'delete'}/${id}`);
  }
  modifLabo(id: number, laboratoire: Laboratoire): Observable<Laboratoire>{
    return this.httpClient.put<Laboratoire>(`${this.baseURL + 'update'}/${id}`, laboratoire);
  }
}
