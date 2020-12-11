import { NestFactory } from '@nestjs/core';
import { SubProjectModule } from './sub-project.module';

async function bootstrap() {
  const app = await NestFactory.create(SubProjectModule);
  await app.listen(3000);
}
bootstrap();
