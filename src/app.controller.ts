import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getDbPassword')
  getDbPassword(): string {
    return this.appService.getDbPassword();
  }

  @Get('/dbtest')
  getDbTest(): Promise<string> {
    return this.appService.getDbTest();
  }

}
