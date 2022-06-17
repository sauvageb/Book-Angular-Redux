import * as fromSelectedBooks from './book-selection.reducer'

export interface AppState {
    selectedBooks: fromSelectedBooks.SelectionBookState;
}

export const reducers = {
    selectedBooks: fromSelectedBooks.bookSelectionReducer
}
