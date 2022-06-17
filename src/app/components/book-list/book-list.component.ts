import {Component, Input} from '@angular/core';
import {Book} from "../../models/book/book.model";
import {AppState} from "../../state";
import {Store} from "@ngrx/store";
import {ACTION_BOOK_SELECTION_ADD} from "../../state/book-selection.action";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  @Input()
  books!: Book[];

  constructor(
    private store: Store<AppState>) {
  }

  addToCollection(book: Book) {
    this.store.dispatch(ACTION_BOOK_SELECTION_ADD({book: book}));
  }

}
