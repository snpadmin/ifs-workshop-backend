import { Injectable } from '@nestjs/common';
import { connection } from './main';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! xD';
  }

  getDbTest(): string {
    connection.then(async conn => {
      console.log('Test db connection');
    }).catch(error => console.log(`Error in connection:: ${error}`));
    return '';
  }
}
