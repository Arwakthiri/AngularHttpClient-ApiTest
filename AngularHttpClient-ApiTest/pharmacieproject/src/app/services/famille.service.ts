import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Famille} from '../models/famille';
import {Fournisseur} from "../models/fournisseur";

@Injectable({
  providedIn: 'root'
})
export class FamilleService {

  private baseURL = 'http://localhost:8080/famille/';

  constructor(private httpClient: HttpClient) {

  }

  getFamList(): Observable<Famille[]> {
    return this.httpClient.get<Famille[]>(`${this.baseURL + 'read'}`);
  }

  addFamille(famille: Famille): Observable<Famille> {
    return this.httpClient.post(`${this.baseURL + 'create'}`, famille);
  }

  delFamille(id: number): Observable<Famille> {
    return this.httpClient.delete(`${this.baseURL + 'delete'}/${id}`);
  }

  modFamille(id: number, famille: Famille): Observable<Famille> {
    return this.httpClient.put<Famille>(`${this.baseURL + 'update'}/${id}`, Famille);
  }
}
