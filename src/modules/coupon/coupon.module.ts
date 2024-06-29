import { Coupon } from './cupon.entity';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Coupon])],
  providers: [CouponService],
  controllers: [CouponController],
})
export class CouponModule {}
