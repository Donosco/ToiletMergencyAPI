import { Controller, Get, Body, Put, Param, Post, Delete, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Toilette } from './Toilette';
import { ToiletteAPI } from './ToiletteAPI';

@Controller('toilettes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllToilettes(): Array<Toilette> {
    return this.appService.getAllToilettes();
  }

  @Post()
  create(@Body() createToilet: Toilette) {
    return this.appService.addToilette(createToilet);
  }
  
  @Put('/:id')
  updateFavorite(@Param('id') id: string) {
    return this.appService.updateFavorite(id);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.appService.remove(id);
  }
}
