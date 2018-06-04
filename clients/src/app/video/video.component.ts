import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import Player from './player'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.pug',
  styleUrls: ['./video.component.styl']
})
export class VideoComponent implements OnInit, AfterViewInit {

  Player: Object = {}
  @Input('quote') quote: Object = {}

  constructor() {
  }

  ngOnInit() {
    this.Player = Player
  }

  ngAfterViewInit () {
    Player.init('video', "XF3WaT5XgKU", 0, 60)
    this.Player = Player
    // window['Player'] = Player
  }

}
