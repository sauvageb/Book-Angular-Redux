import {Component, Input} from '@angular/core';
import {Book} from "../../models/book/book.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../state";
import {ACTION_BOOK_SELECTION_PAY, ACTION_BOOK_SELECTION_REMOVE} from "../../state/book-selection.action";

@Component({
  selector: 'app-book-selection',
  templateUrl: './book-selection.component.html',
  styleUrls: ['./book-selection.component.css']
})
export class BookSelectionComponent {

  @Input()
  books: Book[] = [];

  constructor(private store: Store<AppState>) {
  }

  removeFromCollection(book: Book) {
    this.store.dispatch(ACTION_BOOK_SELECTION_REMOVE({bookToRemove: book}));
  }

  paySelection() {
    this.store.dispatch(ACTION_BOOK_SELECTION_PAY({books: this.books}));
  }


}
