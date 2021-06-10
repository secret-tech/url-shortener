import {Get, Header, Param, Res} from '@nestjs/common';
import { Controller, Post, Body, Req } from '@nestjs/common';
import {Request, Response} from 'express'
import { LinkService } from './link.service';
import { CreateDto } from './dto/create.dto';
import { ShowDto } from './dto/show.dto';

@Controller()
export class LinksController {
  constructor(private readonly service: LinkService) {}

  @Post('short_link')
  @Header('Content-Type', 'application/json')
  async create(@Req() request: Request, @Body() dto: CreateDto): Promise<ShowDto> {
    return this.service.create(dto);
  }

  @Get('short_link/:hash')
  async redirect(@Param('hash') hash: string, @Res() res: Response){
    const link = await this.service.redirect(hash)
    res.redirect(link.url)
    res.status(301)
  }
}
