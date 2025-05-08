import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../residence.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailsresidence',
  templateUrl: './detailsresidence.component.html',
  styleUrls: ['./detailsresidence.component.css']
})
export class DetailsresidenceComponent implements OnInit {
id!:any
  constructor(private resService:ResidenceService,private act:ActivatedRoute){

  }
  ngOnInit(): void {
   this.id= this.act.snapshot.params['id']
   
  }

}
