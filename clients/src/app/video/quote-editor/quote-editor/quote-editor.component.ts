import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-editor',
  templateUrl: './quote-editor.component.pug',
  styleUrls: ['./quote-editor.component.styl']
})
export class QuoteEditorComponent implements OnInit {

  @Input("player") Player : any
  quoteText : String

  constructor() { }

  onTimerChange (startTime, endTime) {
    console.log('onTimerChange', startTime, endTime)
    console.log('Player', this.Player)
    this.Player.playAt(startTime, endTime)
  }

  ngOnInit() {
  }

}
