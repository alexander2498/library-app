import { BOOK_REPOSITORY } from '../../core/constants';
import {Book} from "./book.entity";

export const booksProviders = [{
  provide: BOOK_REPOSITORY,
  useValue: Book,
}];