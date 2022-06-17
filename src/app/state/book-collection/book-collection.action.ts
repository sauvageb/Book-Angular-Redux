import {createAction, props} from '@ngrx/store';
import {Book} from "../../models/book/book.model";

export const ACTION_LOAD_BOOKS = createAction(
  '[Books Page] Loading book collection'
);

export const ACTION_BOOKS_LOADED = createAction(
  '[Books Page] Loading book collection', props<{ books: Book[] }>()
);

