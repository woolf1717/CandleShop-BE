import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../user/user.entity';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string; // e.g., 'order', 'promotion'

  @Column()
  message: string;

  @Column()
  isRead: boolean;

  @Column()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.notifications)
  user: User;
}
