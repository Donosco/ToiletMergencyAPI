import { Controller, Get, Body, Delete, Param, Post, Query, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { Toilette } from './Toilette';

@Controller('toilettes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllToilettes(): Array<Toilette> {
    return this.appService.getAllToilettes();
  }
  
}
