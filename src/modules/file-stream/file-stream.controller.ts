import { Controller, Get, Param, Res, Req } from '@nestjs/common';
import { Response, Request } from 'express';
import { FileStreamService } from './file-stream.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('File Stream')
@Controller('file-stream')
export class FileStreamController {
  constructor(private readonly fileStreamService: FileStreamService) {}

  @Get(':filename')
  async streamFile(
    @Param('filename') filename: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const range = req.headers.range;
    await this.fileStreamService.streamFile(`/videos/${filename}`, range, res);
  }
}
