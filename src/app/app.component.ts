import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "./models/book/book.model";
import {BookService} from "./services/book.service";
import {Store} from "@ngrx/store";
import {AppState, booksSelector} from "./state";
import {ACTION_LOAD_BOOKS} from "./state/book-collection/book-collection.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  books$!: Observable<Book[]>;
  booksSelection$!: Observable<Book[]>;

  constructor(private store: Store<AppState>,
              private bookService: BookService) {
  }

  ngOnInit(): void {
    this.booksSelection$ = this.store.select('selectedBooks');

    this.books$ = this.store.select(booksSelector);
    this.store.dispatch(ACTION_LOAD_BOOKS());
  }

}
