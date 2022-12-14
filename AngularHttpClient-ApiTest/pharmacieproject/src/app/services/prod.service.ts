import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../models/produit';


@Injectable({
  providedIn: 'root'
})
export class ProdService {
  private baseURL = 'http://localhost:8080/produit/';

  constructor(private httpClient: HttpClient) {
  }

  lireprods(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(`${this.baseURL + 'read'}`);
  }

  ajoutprd(produit: Produit): Observable<Produit> {
    return this.httpClient.post(`${this.baseURL + 'create'}`, Produit);
  }

  lireprd(id: number): Observable<Produit> {
    return this.httpClient.get<Produit>(`${this.baseURL + 'read'}/${id}`);
  }

  supprimerprod(id: number): Observable<Produit> {
    return this.httpClient.delete<Produit>(`${this.baseURL + 'delete'}/${id}`);
  }
  rechfournisseur(id: number, produit: Produit): Observable<Produit>{
    return this.httpClient.put<Produit>(`${this.baseURL + 'reada'}/${id}`, Produit);
  }
  rechfamille(id: number, produit: Produit): Observable<Produit>{
    return this.httpClient.put<Produit>(`${this.baseURL + 'readd'}/${id}`, Produit);
  }
  rechlaboratoire(id: number, produit: Produit): Observable<Produit>{
    return this.httpClient.put<Produit>(`${this.baseURL + 'readb'}/${id}`, Produit);
  }
  rechparmot(id: string, produit: Produit): Observable<Produit>{
    return this.httpClient.put<Produit>(`${this.baseURL + 'readf'}/${id}`, Produit);
  }
  modprd(id: number, produit: Produit): Observable<Produit> {
    return this.httpClient.put<Produit>(`${this.baseURL + 'update'}/${id}`, Produit);
  }

}
