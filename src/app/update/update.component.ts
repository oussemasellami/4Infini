import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../residence.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
id!:any
listresidence=new Residence()
addform!:FormGroup
  constructor(private act:ActivatedRoute,private resService:ResidenceService){}
  ngOnInit(): void {
   this.id=this.act.snapshot.params['ide']
    this.addform=new FormGroup({
         //id:new FormControl('',[Validators.required,Validators.pattern("^[1-9]*$")]),
         name:new FormControl('',[Validators.required,Validators.minLength(5)]),
         address:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
         image:new FormControl('',Validators.required),
         status:new FormControl('',[Validators.required,Validators.pattern(/^disponible$/)])
       })

       this.resService.getbyidresidence(this.id).subscribe((data)=>{
this.listresidence=data
this.addform.patchValue(this.listresidence as any)
       })
  }

  get name(){
    return this.addform.get('name')
  }

  update(){
    this.resService.updateresidence(this.id,this.addform.value).subscribe(()=>{
      console.log('updated!!!!!')
    })

  }
}
