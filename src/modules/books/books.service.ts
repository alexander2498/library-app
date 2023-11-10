import {Inject, Injectable} from "@nestjs/common";
import {BOOK_REPOSITORY} from "../../core/constants";
import {Book} from "./book.entity";
import {BookDto} from "./dto/book.dto";

@Injectable()
export class BooksService {
  constructor(
    @Inject(BOOK_REPOSITORY)
    private booksRepository: typeof Book) {}

  async create(book: BookDto): Promise<Book> {
    return await this.booksRepository.create({...book});
  }

  async findAll(): Promise<Book[]> {
    return await this.booksRepository.findAll();
  }

  async delete(id) {
    return await this.booksRepository.destroy({ where: {id} });
  }

  async update(id, data){
    const [numberOfAffectedRows, [updatedBook]] = await this.booksRepository.update({ ...data }, { where: {id}, returning: true });

    return { numberOfAffectedRows, updatedBook };
  }
}