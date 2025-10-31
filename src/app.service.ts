import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! LUFFY REI DOS PIRATAS - GUILHERME DESENVOLVEDOR !';
  }
}
