import { RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api', {
    exclude: [
      { path: 'webhook/(.*)', method: RequestMethod.ALL },
      { path: 'websocket/(.*)', method: RequestMethod.ALL },
    ],
  });
  await app.listen(3000);
}
void bootstrap();
