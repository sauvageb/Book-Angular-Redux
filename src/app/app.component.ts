import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "./models/book/book.model";
import {BookService} from "./services/book.service";
import {Store} from "@ngrx/store";
import {AppState} from "./state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books$: Observable<Book[]> = this.bookService.getBooks();
  booksSelection$: Observable<Book[]> = this.store.select('selectedBooks');

  // booksSelection$: Observable<Book[]> = this.bookService.getBooks();

  constructor(private store: Store<AppState>,
              private bookService: BookService) {
  }

}
