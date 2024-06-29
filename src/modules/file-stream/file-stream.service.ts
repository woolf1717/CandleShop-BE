import { createReadStream, statSync } from 'fs';

import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class FileStreamService {
  async streamFile(filePath: string, range: string, res: any) {
    const fullPath = join(__dirname, '../../public', filePath);
    const stat = statSync(fullPath);
    const fileSize = stat.size;
    const CHUNK_SIZE = 10 ** 6; // 1MB chunks

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const contentLength = end - start + 1;

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': contentLength,
        'Content-Type': 'video/mp4', // Change as per the file type
      });

      const fileStream = createReadStream(fullPath, { start, end });
      fileStream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4', // Change as per the file type
      });

      const fileStream = createReadStream(fullPath);
      fileStream.pipe(res);
    }
  }
}
