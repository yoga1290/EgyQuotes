import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { QuoteComponent } from './grid/quote/quote.component';
import { VideoComponent } from './video/video.component';
import { SearchComponent } from './search/search.component';

import services from './services';
import { QuoteEditorComponent } from './video/quote-editor/quote-editor/quote-editor.component';
import { SelectorAuthorComponent } from './video/quote-editor/selector-author/selector-author.component';
import { TimerComponent } from './video/quote-editor/timer/timer.component';
import { VideoMenuComponent } from './video/video-menu/video-menu.component';
import { AddToPlaylistComponent } from './video/add-to-playlist/add-to-playlist.component'

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    QuoteComponent,
    VideoComponent,
    SearchComponent,
    QuoteEditorComponent,
    SelectorAuthorComponent,
    TimerComponent,
    VideoMenuComponent,
    AddToPlaylistComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule { }
