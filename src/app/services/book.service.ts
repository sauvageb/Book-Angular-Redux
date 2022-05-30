import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Book} from "../models/book/book.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  BASE_URL = 'https://www.googleapis.com/books/v1/volumes?maxResults=12&q=tintin+inauthor:Hergé';

  constructor(private http: HttpClient) {
  }


  getBooks(): Observable<Book[]> {
    return this.http
      .get<{ items: Book[] }>(this.BASE_URL)
      .pipe(map((books) => books.items || []));
  }

}
