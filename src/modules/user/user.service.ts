import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { UserPayload } from './user.payload';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async get(id: number) {
    return this.userRepository.findOne({ id });
  }

  async getByEmail(email: string) {
    return await this.userRepository.findOne({ email });
  }

  async create(payload: UserPayload) {
    const user = await this.getByEmail(payload.email);

    if (user) {
      throw new NotAcceptableException(
        'User with provided email already created.',
      );
    }

    return await this.userRepository.save(payload);
  }
}
