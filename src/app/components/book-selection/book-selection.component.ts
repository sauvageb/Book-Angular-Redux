import {Component, Input} from '@angular/core';
import {Book} from "../../models/book/book.model";

@Component({
  selector: 'app-book-selection',
  templateUrl: './book-selection.component.html',
  styleUrls: ['./book-selection.component.css']
})
export class BookSelectionComponent {

  @Input()
  books: Book[] = [];

  removeFromCollection(book: Book) {
  }

  paySelection() {
  }

}
