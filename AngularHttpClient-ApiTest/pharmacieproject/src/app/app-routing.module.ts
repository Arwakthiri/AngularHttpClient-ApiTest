import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourlistComponent } from '../app/FourComp/fourlist/fourlist.component';
import {ProdlistComponent} from '../app/ProdComp/prodlist/prodlist.component';
import {AddfourComponent} from './FourComp/addfour/addfour.component';
import {AddprodComponent} from './ProdComp/addprod/addprod.component';
import {UpdatefourComponent} from './FourComp/updatefour/updatefour.component';
import {UpdateprodComponent} from './ProdComp/updateprod/updateprod.component';
import {AddLaboComponent} from './laboComp/add-labo/add-labo.component';
import {ListLaboComponent} from './laboComp/list-labo/list-labo.component';
import {UpdateLaboComponent} from './laboComp/update-labo/update-labo.component';
import {FactureComponent} from "./FactComp/addfact/addfact.component";
import {AddfamilleComponent} from "./FamilleComp/addfamille/addfamille.component";
import {FamlistComponent} from "./FamilleComp/famlist/famlist.component";
import {UpdatefamComponent} from "./FamilleComp/updatefam/updatefam.component";
import {AddutilComponent} from "./UtilisateurComp/addutil/addutil.component";

const routes: Routes = [
  { path: '', redirectTo: 'fournisseurs', pathMatch: 'full' },
  { path: 'fournisseurs', component: FourlistComponent },
  { path: 'AddFour', component: AddfourComponent },
  { path: 'updatefour/:id', component: UpdatefourComponent },
  { path: 'produits', component: ProdlistComponent },
  { path: 'addprod', component: AddprodComponent },
  {path: 'updateprod/:id', component: UpdateprodComponent},
  {path: 'addlab', component: AddLaboComponent},
  {path: 'laboratoires', component: ListLaboComponent},
  {path: 'updatelab/:id', component: UpdateLaboComponent},
  {path: 'addfact', component: FactureComponent},
  {path: 'familles', component: AddfamilleComponent},
  {path: 'familles', component: UpdatefamComponent},
  {path: 'pharmaciens', component: AddutilComponent},




  // { path: 'tutorials/:id', component: TutorialDetailsComponent },
  // { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
