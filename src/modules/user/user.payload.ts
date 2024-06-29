import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UserPayload {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @MinLength(1)
  firstName: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @MinLength(1)
  lastName: string;

  @ApiProperty({
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @MinLength(5)
  password: string;
}
