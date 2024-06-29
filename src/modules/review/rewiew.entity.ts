import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty
import { Product } from '../product/product.entity';
import { User } from '../user/user.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The unique identifier of the review' })
  id: number;

  @Column()
  @ApiProperty({ description: 'The rating given in the review' })
  rating: number;

  @Column()
  @ApiProperty({ description: 'The comment given in the review' })
  comment: string;

  @ManyToOne(() => User, (user) => user.reviews)
  @ApiProperty({
    type: () => User,
    description: 'The user who wrote the review',
  })
  user: User;

  @ManyToOne(() => Product, (product) => product.reviews)
  @ApiProperty({
    type: () => Product,
    description: 'The product being reviewed',
  })
  product: Product;
}
