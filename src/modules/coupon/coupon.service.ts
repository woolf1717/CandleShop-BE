import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coupon } from './cupon.entity';

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(Coupon)
    private couponsRepository: Repository<Coupon>,
  ) {}

  findAll(): Promise<Coupon[]> {
    return this.couponsRepository.find();
  }

  findOne(id: number): Promise<Coupon> {
    return this.couponsRepository.findOne({ id });
  }

  create(coupon: Coupon): Promise<Coupon> {
    return this.couponsRepository.save(coupon);
  }

  async update(id: number, coupon: Coupon): Promise<void> {
    await this.couponsRepository.update(id, coupon);
  }

  async remove(id: number): Promise<void> {
    await this.couponsRepository.delete(id);
  }
}
