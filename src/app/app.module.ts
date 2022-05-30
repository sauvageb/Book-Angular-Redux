import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BookListComponent} from './components/book-list/book-list.component';
import {BookSelectionComponent} from './components/book-selection/book-selection.component';
import {StateModule} from "./state/state.module";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookSelectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
