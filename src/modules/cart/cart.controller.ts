import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';
import { ApiTags } from '@nestjs/swagger';
import { CartPayload } from './cart.payload';

@Controller('carts')
@ApiTags('Cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  findAll(@Query('userId') userId: string): Promise<Cart[]> {
    return this.cartService.findAll(+userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cart> {
    return this.cartService.findOne(+id);
  }

  @Post()
  create(@Body() cart: CartPayload): Promise<Cart> {
    return this.cartService.create(cart);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() cart: CartPayload): Promise<void> {
    return this.cartService.update(+id, cart);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.cartService.remove(+id);
  }
}
