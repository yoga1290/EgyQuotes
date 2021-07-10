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
export class PersonService {

  constructor(
    private http: HttpClient
  ) { }

  findByName (name: string) : Observable<any> { //Observable<Array<Object>>
    return this.http.get<Array<Object>>("https://videoquotes.herokuapp.com/person/find?name=" + encodeURIComponent(name)).pipe(
      // tap(_ => this.log(`fetched hero id=${id}`)),
      // catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }


  insert (name : string) : Observable<any> {
    return this.http.post<Object>("/person", { name }, httpOptions).pipe(
      // tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      // catchError(this.handleError<Hero>('addHero'))
    );
  }

}
