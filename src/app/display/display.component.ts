import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import  {Display } from '../display'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input()displayx:Display;
  @Output()event:EventEmitter <any> = new EventEmitter()
  // displays:Display[]=[
  //   new Display ('Alphonce Otieno', 'romanali', 'When I die, delete my history' )
  // ];
  displays:Display []= [new Display ('Alphonce Otieno', 'romanali', '"When I die, delete my history"s' )];

  eventSubmit(){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
