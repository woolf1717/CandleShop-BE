import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty
import { Product } from '../product/product.entity';
import { User } from '../user/user.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The unique identifier of the cart' })
  id: number;

  @ManyToOne(() => User, (user) => user.carts)
  @ApiProperty({ type: () => User, description: 'The user who owns the cart' })
  user: User;

  @ManyToOne(() => Product, (product) => product.carts)
  @ApiProperty({ type: () => Product, description: 'The product in the cart' })
  product: Product;

  @Column()
  @ApiProperty({ description: 'The quantity of the product in the cart' })
  quantity: number;
}
