import { IsNotEmpty, IsNumber } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'modules/product/product.entity';
import { User } from 'modules/user';

export class CartPayload {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @IsNotEmpty()
  user: User;

  @ApiProperty({
    required: true,
    type: () => Product,
  })
  @IsNotEmpty()
  product: Product;
}
