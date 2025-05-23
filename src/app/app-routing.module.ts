import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsresidenceComponent } from './detailsresidence/detailsresidence.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { PartieComponent } from './partie/partie.component';
import { UpdateComponent } from './update/update.component';

const r:Routes=[

  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
  {path:"addresidence",component:FormulaireComponent},
 
  {path:"details/:id",component:DetailsresidenceComponent},
  {path:"update/:ide",component:UpdateComponent},
 //{path:"**",component:NotfoundComponent}

 //ghedamsi mohamed aziz+5
 //feriel ben mamia+5
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(r),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
