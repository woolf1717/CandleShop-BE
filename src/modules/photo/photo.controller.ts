import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { PhotoService } from './photo.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Photos')
@Controller('photos')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get(':filename')
  async servePhoto(@Param('filename') filename: string, @Res() res: Response) {
    await this.photoService.servePhoto(`/photos/${filename}`, res);
  }
}
