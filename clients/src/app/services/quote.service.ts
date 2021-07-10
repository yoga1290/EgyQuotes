import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
}

@Injectable()
export class QuoteService {

  constructor(
    private http: HttpClient
  ) { }

  getQuotes () { //Observable<Object>
    return this.http.get<Array<Object>>("https://videoquotes.herokuapp.com/quotes").pipe(
      // tap(_ => this.log(`fetched hero id=${id}`)),
      // catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }


  addQuotes (quote : Object) { //Observable<Object>
    return this.http.post<Object>("/quotes", quote, httpOptions).pipe(
      // tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      // catchError(this.handleError<Hero>('addHero'))
    );
  }

  updateQuotes (id : String, quote : Object) { //Observable<Object>
    return this.http.put<Object>("/quotes/" + id, quote, httpOptions).pipe(
      // tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      // catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteQuotes (id : String) { //Observable<Object>
    return this.http.delete<Object>("/quotes/" + id, httpOptions).pipe(
      // catchError(this.handleError<Hero>('addHero'))
    );
  }

  getVideoData (videoId : String) { //Observable<Object>
    // https://www.googleapis.com/youtube/v3/videos?part=snippet&key=
    let k = "AIzaSyB4a9Vy_HoHuSFNIT8XUunQii_nla4YQvs"
    return this.http.get<Object>("https://www.googleapis.com/youtube/v3/videos?part=snippet&key=" + k + '&id=' + videoId).pipe(
          map((response:any)=> {
            return {
              channelId: response.items[0].snippet.channelId,
              thumbnail: response.items[0].snippet.thumbnails.high.url
            }
          })
    );

  }

  getChannelData (channelId : String) : Observable<Object> {
    let k = "AIzaSyB4a9Vy_HoHuSFNIT8XUunQii_nla4YQvs"
    return this.http.get<Object>("https://www.googleapis.com/youtube/v3/channels?part=snippet&key=" + k + '&id=' + channelId).pipe(
          map((response:any)=> {
            return {
              channelId: response.items[0].snippet.channelId,
              logo: response.items[0].snippet.thumbnails.high.url
            }
          })
    )
  }
}
