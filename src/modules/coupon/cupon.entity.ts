import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from 'modules/user';

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  discount: number; // discount percentage or amount

  @Column()
  expirationDate: Date;

  @ManyToOne(() => User, (user) => user.coupons)
  user: User;
}
