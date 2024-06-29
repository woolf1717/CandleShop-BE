import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  id: number;

  @Column({ length: 255 })
  firstName: string;

  @Column({ length: 255 })
  lastName: string;

  @Column({ length: 255 })
  email: string;

  @Column({
    name: 'password',
    length: 255,
    transformer: new PasswordTransformer(),
  })
  password: string;

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];

  @OneToMany(() => Coupon, (coupon) => coupon.user)
  coupons: Coupon[];
  notifications: any;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  toJSON() {
    const { password, ...self } = this;
    return self;
  }
}

export class UserFillableFields {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
