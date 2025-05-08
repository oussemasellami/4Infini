import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PartieComponent } from '../partie.component';
import { ListpartieComponent } from '../listpartie/listpartie.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';

const pchild:Routes=[
  {path:"partie",component:PartieComponent,children:[
      {path:"listpartie",component:ListpartieComponent}

    ]},
   // {path:"**",component:NotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pchild)
  ],
  exports:[RouterModule]
})
export class PartieRoutingModule { }
