import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Cart } from 'modules/cart/cart.entity';
import { Order } from 'modules/order/order.entity';
import { Review } from 'modules/review/rewiew.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  imageUrl: string;

  @OneToMany(() => Cart, (cart) => cart.product)
  carts: Cart[];

  @OneToMany(() => Order, (order) => order.product)
  orders: Order[];

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];
}
