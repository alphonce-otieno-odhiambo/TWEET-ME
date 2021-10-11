import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formName:StringConstructor;
  formMessage:string;
  formAuthor:string;
  newMess:any;




submitDisplay(){}

  constructor() { }

  ngOnInit(): void {
  }

}
