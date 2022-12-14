import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Famille} from '../models/famille';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {

  private baseURL = 'http://localhost:8080/famille/';

  constructor(private httpClient: HttpClient) {

  }


  addFamille(famille: Famille): Observable<Famille> {
    return this.httpClient.post(`${this.baseURL + 'creer'}`, famille);
  }

  delFamille(id: number): Observable<Famille> {
    return this.httpClient.delete(`${this.baseURL + 'supprimer'}/${id}`);
  }

  modFamille(id: number, famille: Famille): Observable<Famille> {
    return this.httpClient.put<Famille>(`${this.baseURL + 'modifier'}/${id}`, Famille);
  }
}
