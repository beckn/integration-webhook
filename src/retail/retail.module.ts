import { Module } from '@nestjs/common';
import { RetailService } from './retail.service';

@Module({
  controllers: [],
  providers: [RetailService],
  exports: [RetailService]
})
export class RetailModule {}
