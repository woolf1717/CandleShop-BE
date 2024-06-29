import { AppModule } from './modules/main/app.module';
import { NestFactory } from '@nestjs/core';
import { TrimStringsPipe } from './modules/common/transformer/trim-strings.pipe';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from 'modules/user/swagger';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  app.enableCors();
  app.useGlobalPipes(new TrimStringsPipe(), new ValidationPipe());
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(3000);
}
bootstrap();
