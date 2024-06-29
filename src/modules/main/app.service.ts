import { ConfigService } from './../config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}

  root(): string {
    return this.config.get('APP_URL');
  }
}
