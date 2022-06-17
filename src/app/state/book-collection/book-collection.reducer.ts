import {Book} from "../../models/book/book.model";
import {createReducer, on} from "@ngrx/store";
import {ACTION_BOOKS_LOADED} from "./book-collection.action";

export type BooksState = Book[];

export const initialState: Book[] = [];

export const bookSelectionReducer = createReducer(
  initialState,
  on(ACTION_BOOKS_LOADED, (state, {books}) => books),
);
