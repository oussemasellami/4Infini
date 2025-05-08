import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/core/models/residence';


@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
urlresidence="http://localhost:3000/residences"
  constructor(private http:HttpClient) { }

  getNumber(list:any,crt:any,value:any){
    let n=0
    for(let i in list){
      if(list[i][crt]==value){
        n++
      }
    }
    return n

  }
  getallresidence():Observable<Residence[]>{
    return this.http.get<Residence[]>(this.urlresidence)
  }

  getbyidresidence(id:any):Observable<Residence>{
    return this.http.get<Residence>("http://localhost:3000/residences"+"/"+id)
  }
  deleteresidence(id:any):Observable<Residence[]>{
    return this.http.delete<Residence[]>("http://localhost:3000/residences"+"/"+id)
  }

  addresidence(res:Residence):Observable<Residence[]>{
    return this.http.post<Residence[]>("http://localhost:3000/residences",res)
  }
  updateresidence(id:any,res:Residence):Observable<Residence[]>{
    return this.http.put<Residence[]>("http://localhost:3000/residences"+"/"+id,res)
  }
}
