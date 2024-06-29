import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Cart } from 'modules/cart/cart.entity';
import { Order } from 'modules/order/order.entity';
import { Review } from 'modules/review/rewiew.entity';

export class ProductPayload {
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
  @IsString()
  name: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  imageUrl: string;

  @ApiProperty({
    required: false,
    type: () => [Cart],
  })
  carts: Cart[];

  @ApiProperty({
    required: false,
    type: () => [Order],
  })
  orders: Order[];

  @ApiProperty({
    required: false,
    type: () => [Review],
  })
  reviews: Review[];
}
