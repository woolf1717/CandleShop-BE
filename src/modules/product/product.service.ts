import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductPayload } from './product.payload';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productsRepository.findOne({ where: { id } });
  }

  create(product: ProductPayload): Promise<Product> {
    return this.productsRepository.save(product);
  }

  async update(id: number, product: Product): Promise<void> {
    await this.productsRepository.update(id, product);
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
