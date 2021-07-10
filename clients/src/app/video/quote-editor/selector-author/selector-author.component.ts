import { Component, OnInit, Input } from '@angular/core';

import { PersonService } from '../../../services/person.service'

@Component({
  selector: 'app-selector-author',
  templateUrl: './selector-author.component.pug',
  styleUrls: ['./selector-author.component.styl']
})
export class SelectorAuthorComponent implements OnInit {

  @Input("onAuthorSelect") onAuthorSelect : Function = () => {}

  authorName : String = ''
  suggestedAuthors: Array<Object> = []
  authorSelected: String
  author: Object = { name : '' }

  constructor(
    private personSvc : PersonService
  ) { }

  onAuthorNameChange (authorName: string) {
    // this.suggestedAuthors = [{name: authorName}, {name: authorName}];

    this.personSvc.findByName(authorName).subscribe((result:any) => {
      this.suggestedAuthors = result;
    })
  }

  onSelectAuthor (author : object) {
    this.author = author
    this.onAuthorSelect(author)
  }

  newAuthor (name: string) {
    this.personSvc.insert(name).subscribe(() => {
      //TODO
    })
  }

  ngOnInit() {
  }

}
