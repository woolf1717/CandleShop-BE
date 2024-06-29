import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { User } from 'modules/user';

export class CouponPayload {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsNumber()
  discount: number; // discount percentage or amount

  @IsNotEmpty()
  @IsDate()
  expirationDate: Date;

  @IsNotEmpty()
  user: User;
}
