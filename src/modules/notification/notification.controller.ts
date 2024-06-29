import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Notification } from './notification.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('notifications')
@ApiTags('Notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  findAll(@Query('userId') userId: string): Promise<Notification[]> {
    return this.notificationService.findAll(+userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Notification> {
    return this.notificationService.findOne(+id);
  }

  @Post()
  create(@Body() notification: Notification): Promise<Notification> {
    return this.notificationService.create(notification);
  }

  @Put(':id/mark-as-read')
  markAsRead(@Param('id') id: string): Promise<void> {
    return this.notificationService.markAsRead(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.notificationService.remove(+id);
  }
}
