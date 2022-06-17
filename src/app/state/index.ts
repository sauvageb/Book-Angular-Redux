import * as fromBookCollection from './book-collection/book-collection.reducer'
import * as fromSelectedBooks from './book-selection.reducer'
import {createSelector} from "@ngrx/store";

export interface AppState {
    books: fromBookCollection.BooksState
    selectedBooks: fromSelectedBooks.SelectionBookState;
}

export const reducers = {
    books: fromBookCollection.bookSelectionReducer,
    selectedBooks: fromSelectedBooks.bookSelectionReducer
}

export const booksSelector = createSelector(
    (state: AppState) => state.books,
    (books) => books
);
