import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Facture} from '../models/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private baseURL = 'http://localhost:8080/famille/';


  constructor(private httpClient: HttpClient) { }


  addFacture(facture: Facture): Observable<Facture> {
    return this.httpClient.post(`${this.baseURL + 'creer'}`, facture);
  }
}
