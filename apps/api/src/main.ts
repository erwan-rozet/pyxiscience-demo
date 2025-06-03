import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  console.log(
    '\n\nWELCOME PAUL ! Not much to see yet 😶‍🌫️ but still, enjoy your tour 🚀',
  );
}
bootstrap();
