import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component'
import {HttpClientModule} from '@angular/common/http';
import { FormulaireComponent } from './formulaire/formulaire.component'
import {RouterModule, Routes} from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListannonceComponent } from './annonce/listannonce/listannonce.component'
import { AnnonceRoutingModule } from './annonce/annonce-routing/annonce-routing.module';
import { AnnonceModuleModule } from './annonce/annonce-module/annonce-module.module';
import { PartieComponent } from './partie/partie.component';
import { ListpartieComponent } from './partie/listpartie/listpartie.component';
import { PartieModule } from './partie/partie/partie.module';
import { DetailsresidenceComponent } from './detailsresidence/detailsresidence.component';
import { UpdateComponent } from './update/update.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ResidenceComponent,
    FormulaireComponent,
    NotfoundComponent,
    DetailsresidenceComponent,
    UpdateComponent,
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AnnonceModuleModule,
    PartieModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
