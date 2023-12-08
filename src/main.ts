import { NestFactory } from '@nestjs/core';
import { ToiletModule } from './toilet.module';

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(ToiletModule);
  await app.listen(PORT ?? 3000);
}
bootstrap();
