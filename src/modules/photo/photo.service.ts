import { Injectable, NotFoundException } from '@nestjs/common';
import { createReadStream, existsSync, statSync } from 'fs';

import { Response } from 'express';
import { join } from 'path';

@Injectable()
export class PhotoService {
  async servePhoto(photoPath: string, res: Response) {
    const fullPath = join(__dirname, '../../../public', photoPath);

    if (!existsSync(fullPath)) {
      throw new NotFoundException('Photo not found');
    }

    const stat = statSync(fullPath);
    const fileSize = stat.size;
    const mimeType = this.getMimeType(photoPath);

    res.writeHead(200, {
      'Content-Length': fileSize,
      'Content-Type': mimeType,
    });

    const fileStream = createReadStream(fullPath);
    fileStream.pipe(res);
  }

  private getMimeType(filePath: string): string {
    const ext = filePath.split('.').pop();
    switch (ext) {
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg';
      case 'png':
        return 'image/png';
      case 'gif':
        return 'image/gif';
      default:
        return 'application/octet-stream';
    }
  }
}
