import { NestFactory } from '@nestjs/core';
import { ToiletModule } from './toilet.module';

async function bootstrap() {
  const app = await NestFactory.create(ToiletModule);
  await app.listen(3000);
}
bootstrap();
