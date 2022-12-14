import { Component, OnInit } from '@angular/core';
import {Produit} from '../../models/produit.ts';
import {ProdService} from '../../services/prod.service';
import {Observable} from "rxjs";
import {Router} from '@angular/router';
import {error} from "protractor";

@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {

  prods: Produit[];

  constructor(private prodService: ProdService, private route: Router) {
  }

  ngOnInit(): void {
    this.getProds();
  }

  private getProds() {
    this.prodService.lireprods().subscribe(data => {
      this.prods = data;
    })
  }
  updateprod(id: number) {
    this.route.navigate(['/updatefour', id]);
  }

  deleteprod(id: number) {
    this.prodService.supprimerprod(id).subscribe(data => {
        this.getlist();
      }
    );
  }
  getlist(){
    this.route.navigate(['/produits']);
  }

}
