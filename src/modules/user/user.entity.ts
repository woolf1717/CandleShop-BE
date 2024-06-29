import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { Cart } from 'modules/cart/cart.entity';
import { Coupon } from 'modules/coupon/cupon.entity';
import { Order } from 'modules/order/order.entity';
import { PasswordTransformer } from './password.transformer';
import { Review } from 'modules/review/rewiew.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The unique identifier of the user' })
  id: number;

  @Column({ length: 255 })
  @ApiProperty({ description: 'The first name of the user' })
  firstName: string;

  @Column({ length: 255 })
  @ApiProperty({ description: 'The last name of the user' })
  lastName: string;

  @Column({ length: 255 })
  @ApiProperty({ description: 'The email of the user' })
  email: string;

  @Column({
    name: 'password',
    length: 255,
    transformer: new PasswordTransformer(),
  })
  @ApiProperty({ description: 'The password of the user' })
  password: string;

  @OneToMany(() => Cart, (cart) => cart.user)
  @ApiProperty({ type: () => [Cart], description: 'The carts of the user' })
  carts: Cart[];

  @OneToMany(() => Coupon, (coupon) => coupon.user)
  @ApiProperty({ type: () => [Coupon], description: 'The coupons of the user' })
  coupons: Coupon[];
  notifications: any;

  @OneToMany(() => Order, (order) => order.user)
  @ApiProperty({ type: () => [Order], description: 'The orders of the user' })
  orders: Order[];

  @OneToMany(() => Review, (review) => review.user)
  @ApiProperty({ type: () => [Review], description: 'The reviews of the user' })
  reviews: Review[];

  toJSON() {
    const { password, ...self } = this;
    return self;
  }
}

export class UserFillableFields {
  @ApiProperty({ description: 'The email of the user' })
  email: string;

  @ApiProperty({ description: 'The first name of the user' })
  firstName: string;

  @ApiProperty({ description: 'The last name of the user' })
  lastName: string;

  @ApiProperty({ description: 'The password of the user' })
  password: string;
}
