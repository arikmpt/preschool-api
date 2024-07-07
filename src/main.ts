import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const service = new ConfigService();
    await app.listen(service.get<number>('port'));
}
bootstrap();
