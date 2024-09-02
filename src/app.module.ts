import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RetailModule } from './retail/retail.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AxiosHttpService } from './http/axios-http.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RetailModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AxiosHttpService, AppService],
})
export class AppModule {}
