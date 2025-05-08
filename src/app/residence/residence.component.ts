import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/core/models/residence';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {
search=""

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/residence1.jpg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/residence2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/residence2.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/residence2.jpg", status: "En Construction"}
   ];
listserviceResidence:Residence[]=[]
constructor(private resService:ResidenceService){}
  ngOnInit(): void {
    this.resService.getallresidence().subscribe((data)=>{
  this.listserviceResidence=data
  console.log(this.listserviceResidence)
    })
   
  }

   showlocation(res:Residence){

    if(res.address=="inconnu"){
      alert('Adress est inconnu')
    }else{
      alert('adress'+res.address)
    }

   }
searchlocation(){
  return this.listserviceResidence.filter(r=>r.name.toLowerCase().includes(this.search.toLowerCase()))
}
somme!:any
calucl(){
 this.somme=this.resService.getNumber(this.listResidences,"name","El fel")
}

deleteResidence(id:any){
  this.resService.deleteresidence(id).subscribe(()=>{
    this.ngOnInit()
    console.log('deleted!!!!!')
  })

}

}
