import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CouponService } from './coupon.service';
import { Coupon } from './cupon.entity';
import { ApiTags } from '@nestjs/swagger';
import { CouponPayload } from './cupon.payload';

@Controller('coupons')
@ApiTags('Cupons')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Get()
  findAll(): Promise<Coupon[]> {
    return this.couponService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Coupon> {
    return this.couponService.findOne(+id);
  }

  @Post()
  create(@Body() coupon: CouponPayload): Promise<Coupon> {
    return this.couponService.create(coupon);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() coupon: CouponPayload,
  ): Promise<void> {
    return this.couponService.update(+id, coupon);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.couponService.remove(+id);
  }
}
