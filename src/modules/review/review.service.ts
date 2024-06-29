import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './rewiew.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
  ) {}

  findAll(): Promise<Review[]> {
    return this.reviewsRepository.find({ relations: ['user', 'product'] });
  }

  findOne(id: number): Promise<Review> {
    return this.reviewsRepository.findOne({ id });
  }

  create(review: Review): Promise<Review> {
    return this.reviewsRepository.save(review);
  }

  async update(id: number, review: Review): Promise<void> {
    await this.reviewsRepository.update(id, review);
  }

  async remove(id: number): Promise<void> {
    await this.reviewsRepository.delete(id);
  }
}
