import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getSandBoxDataController(@Body() body: any) {
    this.appService.getSandBoxDataService(body);
    return { message: { ack: { status: 'ACK' } } };
  }
}
