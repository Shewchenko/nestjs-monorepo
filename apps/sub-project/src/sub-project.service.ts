import { Injectable } from '@nestjs/common';

@Injectable()
export class SubProjectService {
  getHello(): string {
    return 'Hello World!';
  }
}
