import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pharmacien} from '../models/pharmacien';
import {Produit} from "../models/produit";
@Injectable({
  providedIn: 'root'
})
export class PharmacienService {

  private baseURL = 'http://localhost:8080/pharmacien/';


  constructor(private httpClient: HttpClient) { }


  ajoututil(pharmacien: Pharmacien): Observable<Pharmacien> {
    return this.httpClient.post(`${this.baseURL + 'create'}`, Pharmacien);
  }

  supprimerprod(id_util: number): Observable<Pharmacien> {
    return this.httpClient.delete<Pharmacien>(`${this.baseURL + 'delete'}/${id_util}`);
  }

  modprd(id_util: number, pharmacien: Pharmacien): Observable<Produit> {
    return this.httpClient.put<Produit>(`${this.baseURL + 'update'}/${id_util}`, Pharmacien);
  }

}
