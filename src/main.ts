import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session'
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  app.use(cookieParser());
  app.use(
    session({
      secret: 'your-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(csurf());
 
  
  const config = new DocumentBuilder()
    .setTitle('AuthSystem')
    .setDescription('Authentication Authorization with Refresh Token and Role base authentication')
    .setVersion('1.0')
    .addTag('RBACK')
    .addTag('NestJS')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);
  await app.listen(3000);
}
bootstrap();
