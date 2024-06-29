import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty
import { User } from 'modules/user';

export class CouponPayload {
  @IsNotEmpty()
  @ApiProperty({ description: 'The unique identifier of the coupon' })
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The code of the coupon' })
  code: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'The discount percentage or amount of the coupon',
  })
  discount: number; // discount percentage or amount

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({ description: 'The expiration date of the coupon' })
  expirationDate: Date;

  @IsNotEmpty()
  @ApiProperty({
    type: () => User,
    description: 'The user who owns the coupon',
  })
  user: User;
}
