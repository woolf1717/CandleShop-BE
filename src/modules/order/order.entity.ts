import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty
import { Product } from '../product/product.entity';
import { User } from '../user/user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The unique identifier of the order' })
  id: number;

  @Column()
  @ApiProperty({ description: 'The date of the order' })
  date: Date;

  @Column()
  @ApiProperty({ description: 'The total amount of the order' })
  total: number;

  @ManyToOne(() => User, (user) => user.orders)
  @ApiProperty({
    type: () => User,
    description: 'The user who placed the order',
  })
  user: User;

  @ManyToOne(() => Product, (product) => product.orders)
  @ApiProperty({ type: () => Product, description: 'The product in the order' })
  product: Product;
}
