import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

    @Get('health')
    @HttpCode(200)
    healthCheck() {
        return `Webhook Service running : ${new Date()}`;
    }

    @Post('webhook')
    @HttpCode(200)
    webhookHandler(@Body() webhookBody: any): any {
        const { context, message } = webhookBody;
        return this.appService.webhook( context, message );
    }
}
