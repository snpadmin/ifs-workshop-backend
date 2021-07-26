import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { createConnection } from 'typeorm';


export const connection = createConnection().then(async connection => {
  console.log('Connection successful');
}).catch(error => console.log(error));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
