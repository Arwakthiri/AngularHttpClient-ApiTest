import { Component, OnInit } from '@angular/core';
import {Produit} from "../../models/produit.ts";
import {ProdService} from "../../services/prod.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {

  produit: Produit = new Produit();
  constructor(private prodService:ProdService , private route: Router) { }

  ngOnInit(): void {
  }

  prodlist(){
    this.route.navigate(['/produits']);
  }
  saveprod(){
    this.prodService.ajoutprd(this.produit).subscribe(data=>{
      console.log(data);
    }, error => console.log(error))
  }
  onSubmit(){
    console.log(this.produit);
    this.saveprod();
    this.prodlist()
  }
}
