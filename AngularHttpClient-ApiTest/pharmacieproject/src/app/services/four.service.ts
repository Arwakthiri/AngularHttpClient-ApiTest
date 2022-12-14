import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Fournisseur} from '../models/fournisseur';
import {Laboratoire} from "../models/laboratoire";

@Injectable({
  providedIn: 'root'
})
export class FourService {
  private baseURL = 'http://localhost:8080/fournisseur/';

  constructor(private httpClient: HttpClient) {
  }
  addFour(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.httpClient.post(`${this.baseURL + 'create'}`, fournisseur);
  }

  getFour(id: number): Observable<Fournisseur> {
    return this.httpClient.get<Fournisseur>(`${this.baseURL + 'read'}/${id}`);
  }
  getFourList(): Observable<Fournisseur[]> {
    return this.httpClient.get<Fournisseur[]>(`${this.baseURL + 'read'}`);
  }

  delFour(id: number): Observable<Fournisseur> {
    return this.httpClient.delete(`${this.baseURL + 'delete'}/${id}`);
  }

  modFour(id: number, fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.httpClient.put<Fournisseur>(`${this.baseURL + 'update'}/${id}`, Fournisseur);
  }
}
