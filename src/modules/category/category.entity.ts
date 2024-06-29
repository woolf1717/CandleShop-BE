import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The unique identifier of the category' })
  id: number;

  @Column()
  @ApiProperty({ description: 'The name of the category' })
  name: string;

  @Column()
  @ApiProperty({ description: 'The description of the category' })
  description: string;
}
