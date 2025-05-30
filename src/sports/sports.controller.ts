import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { SportCreateDto, SportUpdateDto } from './dtos';
import { Sport } from './entities/sport.entity';
import { SportsService } from './sports.service';

@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Post()
  create(@Body() body: SportCreateDto): Promise<Sport> {
    return this.sportsService.create(body);
  }

  @Get()
  findAll(): Promise<Sport[]> {
    return this.sportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<Sport | null> {
    return this.sportsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: SportUpdateDto,
  ): Promise<Sport | null> {
    return this.sportsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    return this.sportsService.remove(id);
  }
}
