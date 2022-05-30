import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/book/book.model";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input()
  books!: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  addToCollection(book: Book) {
  }

}
