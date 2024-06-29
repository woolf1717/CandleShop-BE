import { IsNotEmpty, IsNumber } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'modules/product/product.entity';
import { ProductPayload } from 'modules/product/product.payload';
import { User } from 'modules/user';
import { UserPayload } from 'modules/user/user.payload';

export class CartPayload {
  @ApiProperty({
    required: true,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({
    required: true,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({
    required: true,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @ApiProperty({
    required: true,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @IsNotEmpty()
  user: UserPayload;

  @ApiProperty({
    required: true,
    type: () => Product,
  })
  @IsNotEmpty()
  product: ProductPayload;
}
