import { Module } from '@nestjs/common';
import { ToiletController } from './toilet.controller';
import { ToiletService } from './toilet.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ToiletController],
  providers: [ToiletService],
})
export class ToiletModule {}
