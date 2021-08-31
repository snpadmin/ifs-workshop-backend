import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './config/app.config';

export const connection = createConnection().then(async connection => {
  console.log('Connection successful');
  return connection;
}).catch(error => console.log(error));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const appConfig = configService.get<AppConfig>('app');
  app.enableCors();
  await app.listen(appConfig.port);
}
bootstrap();
