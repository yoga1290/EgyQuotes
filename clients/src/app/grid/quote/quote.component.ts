import { Component, Input, OnInit } from '@angular/core';

import { QuoteService } from '../../services/quote.service'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.pug',
  styleUrls: ['./quote.component.styl']
})
export class QuoteComponent implements OnInit {

  @Input("key") quoteId: String
  @Input("quote") quote: Object
  @Input("click") click: Function = () => {}

  date : String
  logo: String

  constructor(private quoteSvc : QuoteService) { }

  ngOnInit() {

    if (!this.quote || !this.quote['video'] || !this.quote['video']['id']) {
      return;
    }

    console.log('quote', this.quote, this.quoteId)

    let date = new Date(this.quote['airedTime'])
    this.date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()


    this.quoteSvc.getVideoData(this.quote['video']['id']).subscribe((videoData) => {
      // this.quote = Object.assign(this.quote, videoData)
      this.quote['thumbnail'] = `url("${videoData['thumbnail']}")`
      this.quoteSvc.getVideoData(videoData['channelId']).subscribe((channelData) => {
        console.log(channelData)
        this.logo = channelData['logo']
      })
    })

  }



}
