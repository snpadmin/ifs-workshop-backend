import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Connection } from 'typeorm';
import { connection } from './main';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService
  ) {}

  getHello(): string {
    return 'Hello World! xD';
  }

  getDbPassword(): string {
    return this.configService.get<string>('database.password');
  }

  async getDbTest(): Promise<string> {
    const conn = await connection;
    console.log('Test db connection');
    const result = await (conn as Connection).query('select * from user');
    console.log(result);
    return '';
  }
}
