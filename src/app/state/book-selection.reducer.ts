import {createReducer, on} from '@ngrx/store';
import {Book} from "../models/book/book.model";
import {
  ACTION_BOOK_SELECTION_ADD,
  ACTION_BOOK_SELECTION_PAY,
  ACTION_BOOK_SELECTION_REMOVE
} from "./book-selection.action";

export type SelectionBookState = Book[];

export const initialState: Book[] = [];

export const bookSelectionReducer = createReducer(
  initialState,
  on(ACTION_BOOK_SELECTION_ADD, (state, {book}) => [...state, book]),
  on(ACTION_BOOK_SELECTION_REMOVE, (state, {bookToRemove}) => {
    return [...state.filter(book => book.id !== bookToRemove.id)];
  }),
  on(ACTION_BOOK_SELECTION_PAY, (state, {books}) => {
    return [];
  }),
);
