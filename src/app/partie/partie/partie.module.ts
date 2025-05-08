import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartieComponent } from '../partie.component';
import { ListpartieComponent } from '../listpartie/listpartie.component';
import { PartieRoutingModule } from '../partie-routing/partie-routing.module';




@NgModule({
  declarations: [
    PartieComponent,
    ListpartieComponent,
  ],
  imports: [
    CommonModule,
    PartieRoutingModule
  ]
})
export class PartieModule { }
