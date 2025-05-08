import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../residence.service';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-detailsresidence',
  templateUrl: './detailsresidence.component.html',
  styleUrls: ['./detailsresidence.component.css']
})
export class DetailsresidenceComponent implements OnInit {
id!:any
listresidence=new Residence()
  constructor(private resService:ResidenceService,private act:ActivatedRoute){

  }
  ngOnInit(): void {
   this.id= this.act.snapshot.params['id']
   this.resService.getbyidresidence(this.id).subscribe((data)=>{
this.listresidence=data
console.log(this.listresidence)
   })
   
  }

}
