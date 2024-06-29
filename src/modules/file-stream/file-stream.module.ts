import { Module } from '@nestjs/common';
import { FileStreamService } from './file-stream.service';
import { FileStreamController } from './file-stream.controller';

@Module({
  providers: [FileStreamService],
  controllers: [FileStreamController]
})
export class FileStreamModule {}
