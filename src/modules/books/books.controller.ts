import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from "@nestjs/common";
import {BooksService} from "./books.service";
import {BookDto} from "./dto/book.dto";
import {Book} from "./book.entity";

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}
  @Get()
  findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  async create(@Body() book: BookDto): Promise<Book> {
    return await this.bookService.create(book)
  }

  @Put(":id")
  async update(@Param('id') id: number, @Body() book: BookDto) {
    const { numberOfAffectedRows, updatedBook } = await this.bookService.update(id, book);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Book doesn't exist");
    }

    return updatedBook;
  }

  @Delete(":id")
  async remove(@Param('id') id: number) {
    const deleted = await this.bookService.delete(id)

    if (deleted === 0) {
      throw new NotFoundException('This Post doesn\'t exist');
    }

    return deleted;
  }
}