import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //databinding
  //Interplation
  //ts==>html

  nom="bonjour 4 infin 1"

  //proprty binding
  prop=true
//event binding
  add(){
    console.log('salut 4 infini')
  }
  //
  search="4 infni"

}
