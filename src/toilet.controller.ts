import { Controller, Get, Body, Put, Param, Post, Delete, Query } from '@nestjs/common';
import { ToiletService } from './toilet.service';
import { Toilette } from './Toilette';

@Controller('toilettes')
export class ToiletController {
  constructor(private readonly toiletService: ToiletService) {}

  @Get()
  getAllToilettes(): Array<Toilette> {
    return this.toiletService.getAllToilettes();
  }

  @Post()
  create(@Body() createToilet: Toilette) {
    return this.toiletService.addToilette(createToilet);
  }
  
  @Put('/:id')
  updateFavorite(@Param('id') id: string) {
    return this.toiletService.updateFavorite(id);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.toiletService.remove(id);
  }
}
