import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ACTION_BOOKS_LOADED, ACTION_LOAD_BOOKS} from "./book-collection.action";
import {map, mergeMap} from "rxjs";
import {BookService} from "../../services/book.service";

@Injectable()
export class BookCollectionEffect {

  constructor(private actions$: Actions,
              private bookService: BookService) {
  }

  loadBookCollection$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(ACTION_LOAD_BOOKS),
        mergeMap(
          () => this.bookService.getBooks()
            .pipe(
              map(books => ACTION_BOOKS_LOADED({books}))
            )
        )
      )
  );

}
