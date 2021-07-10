import { Component, Input, OnInit } from '@angular/core';
// import { Quote } from '../models';
import { QuoteService } from '../services/quote.service'
import { Quote } from '../interfaces'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.pug',
  styleUrls: ['./grid.component.styl']
})
export class GridComponent implements OnInit {

  @Input("quotes") items: Array<Quote>
  @Input("onQuoteSelect") onQuoteSelect: Function = () => {}


  constructor(private quoteSvc : QuoteService) {
  }

  ngOnInit() {

    let quote = {
                "id": "585e9e29a066470004d3dfdc",
                "creationTime": 1482595881132,
                "creatorId": "584d9df7d18ab20004a7ef71",
                "video": {
                    "id": "9u-OpB00zvk",
                    "creationTime": 1482595881511,
                    "creatorId": "584d9df7d18ab20004a7ef71",
                    "start": [
                        655,
                        681,
                        669,
                        796,
                        643
                    ],
                    "end": [
                        655,
                        681,
                        669,
                        796,
                        643
                    ],
                    "quotes": [
                    ],
                    "channelId": "UCB6sc84dcg6VQGB_d89sx2g",
                    "time": 1339290518000,
                    "previewImage": null,
                    "deleted": false,
                    "target": {
                        "id": "9u-OpB00zvk",
                        "creationTime": 1482595881511,
                        "creatorId": "584d9df7d18ab20004a7ef71",
                        "start": [
                            655,
                            681,
                            669,
                            796,
                            643
                        ],
                        "end": [
                            655,
                            681,
                            669,
                            796,
                            643
                        ],
                        "quotes": [
                        ],
                        "channelId": "UCB6sc84dcg6VQGB_d89sx2g",
                        "time": 1339290518000,
                        "previewImage": null,
                        "deleted": false
                    }
                },
                "channelId": "UCB6sc84dcg6VQGB_d89sx2g",
                "person": null,
                "quote": "هل دي الشريعة؟",
                "start": 1331,
                "end": 1333,
                "airedTime": 1339290518000,
                "deleted": false
            };
    this.items = [quote, quote]
    this.items.forEach((o, i) => {
      // this.quoteSvc.getVideoData("9u-OpB00zvk").subscribe((videoData) => {
      //   this.items[i] = Object.assign(this.items[i], videoData)
      // })
    })

    // this.quoteSvc.getQuotes().subscribe(console.log)
  }

}
