import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty
import { User } from '../user/user.entity';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The unique identifier of the notification' })
  id: number;

  @Column()
  @ApiProperty({ description: 'The type of the notification' })
  type: string; // e.g., 'order', 'promotion'

  @Column()
  @ApiProperty({ description: 'The message of the notification' })
  message: string;

  @Column()
  @ApiProperty({ description: 'The read status of the notification' })
  isRead: boolean;

  @Column()
  @ApiProperty({ description: 'The creation date of the notification' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.notifications)
  @ApiProperty({
    type: () => User,
    description: 'The user associated with the notification',
  })
  user: User;
}
