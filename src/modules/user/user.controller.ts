import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { UserPayload } from './user.payload';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  getUser(@Param('id') id: number): Promise<User> {
    return this.usersService.get(id);
  }

  @Post()
  createUser(@Body() payload: UserPayload): Promise<User> {
    return this.usersService.create(payload);
  }
}
