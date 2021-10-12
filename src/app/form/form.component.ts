
import { Component, OnInit } from '@angular/core';
import { Display } from '../display';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

   formName:string; 
   formMessage:string;
   formAuthor:string;
   newDisplay:any;

  
  
   displays:Display []= [new Display ('Alphonce Otieno', 'romanali', '"When I die, delete my history"s' )];



submitDisplay(){ 
  this.newDisplay= new Display(this.formName, this.formAuthor, this.formMessage);
  this.displays.push(this.newDisplay);
}

  constructor() { }

  ngOnInit(): void {
  }

}
