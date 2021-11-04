import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.css']
})
export class AnswerButtonComponent implements OnInit, OnChanges {
  
  constructor() { }

  ngOnInit(): void {
    console.log("Oninit ejecutado")
  }
  ngOnChanges(changes:SimpleChanges): void {
    console.log("ngOnchanges ejecutado", changes)
  }

  @Input() answer : string | undefined 

  @Output() buttonSelected: EventEmitter<any> = new EventEmitter()

  selectAnswer(){
    this.buttonSelected?.emit(this.answer)
  }
}
