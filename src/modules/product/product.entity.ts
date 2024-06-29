import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty
import { Cart } from 'modules/cart/cart.entity';
import { Order } from 'modules/order/order.entity';
import { Review } from 'modules/review/rewiew.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The unique identifier of the product' })
  id: number;

  @Column()
  @ApiProperty({ description: 'The name of the product' })
  name: string;

  @Column()
  @ApiProperty({ description: 'The description of the product' })
  description: string;

  @Column()
  @ApiProperty({ description: 'The price of the product' })
  price: number;

  @Column()
  @ApiProperty({ description: 'The stock quantity of the product' })
  stock: number;

  @Column()
  @ApiProperty({ description: 'The image URL of the product' })
  imageUrl: string;

  @OneToMany(() => Cart, (cart) => cart.product)
  @ApiProperty({
    type: () => [Cart],
    description: 'The carts containing the product',
  })
  carts: Cart[];

  @OneToMany(() => Order, (order) => order.product)
  @ApiProperty({
    type: () => [Order],
    description: 'The orders containing the product',
  })
  orders: Order[];

  @OneToMany(() => Review, (review) => review.product)
  @ApiProperty({
    type: () => [Review],
    description: 'The reviews of the product',
  })
  reviews: Review[];
}
