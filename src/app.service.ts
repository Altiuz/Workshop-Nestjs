import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      msg: 'Hello, this is a Simple REST API with NestJS for Altiuz!',
      api: '/api/users',
    };
  }
}
