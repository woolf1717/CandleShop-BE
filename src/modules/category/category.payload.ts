import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryPayload {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
