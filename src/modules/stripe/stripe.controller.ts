import { Controller, Get } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { StripeService } from './stripe.service';

@Controller('stripe')
@ApiTags('Stripe')
export class StripeController {
  constructor(private stripeService: StripeService) {}

  @Get('products')
  async getProducts() {
    return await this.stripeService.getProducts();
  }

  @Get('customers')
  async getCustomers() {
    return await this.stripeService.getProducts();
  }
}
