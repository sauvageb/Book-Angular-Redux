import {createAction, props} from '@ngrx/store';
import {Book} from "../models/book/book.model";

export const ACTION_BOOK_SELECTION_ADD = createAction(
  '[Books Page] Book added to selection', props<{ book: Book }>()
);

export const ACTION_BOOK_SELECTION_REMOVE = createAction(
  '[Books Page] Book removed from selection', props<{ bookToRemove: Book }>()
);

export const ACTION_BOOK_SELECTION_PAY = createAction(
  '[Books Page] Payment book selection', props<{ books: Book[] }>()
);


