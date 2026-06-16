import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola cabezon, testing ci/cd 2';
  }
}
