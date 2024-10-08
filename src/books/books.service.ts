import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class BooksService {
  private readonly books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  ];

  constructor(private readonly logger: LoggerService) {
    this.logger.log('BooksService initialized.');
  }

  findAll() {
    this.logger.log('Fetching all books');
    return this.books;
  }
}
