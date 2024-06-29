import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { User } from 'modules/user';

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The unique identifier of the coupon' })
  id: number;

  @Column()
  @ApiProperty({ description: 'The code of the coupon' })
  code: string;

  @Column()
  @ApiProperty({
    description: 'The discount percentage or amount of the coupon',
  })
  discount: number; // discount percentage or amount

  @Column()
  @ApiProperty({ description: 'The expiration date of the coupon' })
  expirationDate: Date;

  @ManyToOne(() => User, (user) => user.coupons)
  @ApiProperty({
    type: () => User,
    description: 'The user who owns the coupon',
  })
  user: User;
}
