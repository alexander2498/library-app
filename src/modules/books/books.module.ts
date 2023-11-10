import { Module } from '@nestjs/common';
import {BooksService} from "./books.service";
import {booksProviders} from "./books.providers";
import {BooksController} from "./books.controller";

@Module({
  providers: [BooksService, ...booksProviders],
  controllers: [BooksController],
  exports: [BooksService],
})
export class BooksModule {}
