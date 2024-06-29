import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'modules/product/product.entity';
import { User } from 'modules/user/user.entity';

export class OrderPayload {
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
  @IsDate()
  date: Date;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  total: number;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  user: User;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  product: Product;
}
