import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quot-display',
  templateUrl: './quot-display.component.html',
  styleUrls: ['./quot-display.component.css']
})
export class QuotDisplayComponent implements OnInit {
  upVotes:number = 0
  downVotes:number = 0
  upVote(){
 this.upVotes++

  }
  
  downvote(){
 this.downVotes++
  }

  constructor() { }

  ngOnInit(): void {
  }

}
