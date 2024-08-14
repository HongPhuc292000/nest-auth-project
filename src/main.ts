import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { IConfiguration } from './config/configuration.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<IConfiguration>(ConfigService);
  await app.listen(configService.port);
}
bootstrap();
