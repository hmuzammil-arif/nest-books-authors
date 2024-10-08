import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  private readonly context: string;

  constructor(context: string) {
    console.log(context);
    this.context = context;
  }

  log(message: string) {
    console.log(`[${this.context}] ${message}`);
  }
}
