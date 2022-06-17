import * as fromBookCollection from './book-collection/book-collection.reducer'
import * as fromSelectedBooks from './book-selection.reducer'

export interface AppState {
    books: fromBookCollection.BooksState
    selectedBooks: fromSelectedBooks.SelectionBookState;
}

export const reducers = {
    books: fromBookCollection.bookSelectionReducer,
    selectedBooks: fromSelectedBooks.bookSelectionReducer
}

