import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { ValidationException } from './exceptions/validation.exception';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import configuration from './config/configuration';

const config = configuration();

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(
      new ValidationPipe({
        exceptionFactory: (errors: ValidationError[]) =>
            new ValidationException(errors),
      }),
  );

    console.log('port', config.app_port)

  await app.listen(config.app_port);
}
bootstrap();
