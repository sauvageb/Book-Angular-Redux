import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "./models/book/book.model";
import {BookService} from "./services/book.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books$: Observable<Book[]> = this.bookService.getBooks();
  booksSelection$: Observable<Book[]> = this.bookService.getBooks();

  constructor(private bookService: BookService) {
  }

}
