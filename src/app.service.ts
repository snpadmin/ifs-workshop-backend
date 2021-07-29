import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { connection } from './main';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! xD';
  }

  async getDbTest(): Promise<string> {
    const conn = await connection;
    console.log('Test db connection');
    const result = await (conn as Connection).query('select * from user');
    console.log(result);
    return '';
  }
}
