import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {CorsOptions} from "@nestjs/common/interfaces/external/cors-options.interface";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: '*'
  };
  app.enableCors(corsOptions);
  // global prefix
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
