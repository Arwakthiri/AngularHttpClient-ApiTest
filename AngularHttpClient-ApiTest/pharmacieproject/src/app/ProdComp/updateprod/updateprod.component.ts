import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProdService} from '../../services/prod.service';
import {Produit} from '../../models/produit.ts';

@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.css']
})
export class UpdateprodComponent implements OnInit {

  id: number;
  produit: Produit = new Produit();

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ProdService: ProdService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.ProdService.lireprd(this.id).subscribe(data => {
      this.produit = data;
    }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.ProdService.modprd(this.id, this.produit).subscribe(data => {
      this.prodlist();
    }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  prodlist() {
    this.router.navigate(['/produit']);
  }

}
