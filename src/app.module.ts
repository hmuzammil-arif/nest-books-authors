import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { AuthorsController } from './authors/authors.controller';
import { AuthorsService } from './authors/authors.service';
import { LoggerService } from './logger/logger.service';

@Module({
  imports: [],
  controllers: [BooksController, AuthorsController],
  providers: [
    {
      provide: 'BooksServiceLogger',
      useFactory: () => new LoggerService('BooksService'),
    },
    {
      provide: 'AuthorsServiceLogger',
      useFactory: () => new LoggerService('AuthorsService'),
    },
    {
      provide: BooksService,
      useFactory: (logger: LoggerService) => new BooksService(logger),
      inject: ['BooksServiceLogger'],
    },
    {
      provide: AuthorsService,
      useFactory: (logger: LoggerService) => new AuthorsService(logger),
      inject: ['AuthorsServiceLogger'],
    },
  ],
})
export class AppModule {}
