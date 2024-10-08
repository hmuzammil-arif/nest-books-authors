import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class AuthorsService {
  private readonly authors = [
    { id: 1, name: 'George Orwell' },
    { id: 2, name: 'F. Scott Fitzgerald' },
  ];

  constructor(private readonly logger: LoggerService) {
    this.logger.log('AuthorsService initialized.');
  }

  findAll() {
    this.logger.log('Fetching all authors');
    return this.authors;
  }
}
