import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './cart.entity';
import { CartPayload } from './cart.payload';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartsRepository: Repository<Cart>,
  ) {}

  findAll(userId: number): Promise<Cart[]> {
    return this.cartsRepository.find({
      where: { user: { id: userId } },
      relations: ['product'],
    });
  }

  findOne(id: number): Promise<Cart> {
    return this.cartsRepository.findOne({ id });
  }

  create(cart: CartPayload): Promise<Cart> {
    return this.cartsRepository.save(cart);
  }

  async update(id: number, cart: CartPayload): Promise<void> {
    await this.cartsRepository.update(id, cart);
  }

  async remove(id: number): Promise<void> {
    await this.cartsRepository.delete(id);
  }
}
