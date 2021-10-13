import { Component, OnInit ,Input} from '@angular/core';
import  {Display } from '../display'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input()displayx:Display;
  
  // displays:Display[]=[
  //   new Display ('Alphonce Otieno', 'romanali', 'When I die, delete my history' )
  // ];
  displays:Display []= [new Display ('Alphonce Otieno', 'romanali', '"When I die, delete my history"s' )];

  constructor() { }

  ngOnInit(): void {
  }

}
