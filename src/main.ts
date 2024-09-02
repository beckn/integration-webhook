import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5555;
  
  await app.listen(PORT, () => {
    console.log('Webhook server running on: ', PORT);
  });
}
bootstrap();
