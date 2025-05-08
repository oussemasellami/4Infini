import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
 
  addform!:FormGroup
constructor(private resService:ResidenceService){}
  ngOnInit(): void {

    this.addform=new FormGroup({
      //id:new FormControl('',[Validators.required,Validators.pattern("^[1-9]*$")]),
      name:new FormControl('',[Validators.required,Validators.minLength(5)]),
      address:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
      image:new FormControl('../../assets/images/residence1.jpg',Validators.required),
      status:new FormControl('',[Validators.required,Validators.pattern(/^disponible$/)])
    })
    

  }
get name(){
  return this.addform.get('name')
}

  add(){

    this.resService.addresidence(this.addform.value).subscribe(()=>{
      console.log('added!!!!')
    })
    console.log(this.addform.value)
  }

}
