import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './notification.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private notificationsRepository: Repository<Notification>,
  ) {}

  findAll(userId: number): Promise<Notification[]> {
    return this.notificationsRepository.find({
      where: { user: { id: userId } },
    });
  }

  findOne(id: number): Promise<Notification> {
    return this.notificationsRepository.findOne({ id });
  }

  create(notification: Notification): Promise<Notification> {
    notification.createdAt = new Date();
    return this.notificationsRepository.save(notification);
  }

  async markAsRead(id: number): Promise<void> {
    await this.notificationsRepository.update(id, { isRead: true });
  }

  async remove(id: number): Promise<void> {
    await this.notificationsRepository.delete(id);
  }
}
