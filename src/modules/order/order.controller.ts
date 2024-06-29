import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { ApiTags } from '@nestjs/swagger';
import { OrderPayload } from './order.payload';

@Controller('orders')
@ApiTags('Orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Order> {
    return this.orderService.findOne(+id);
  }

  @Post()
  create(@Body() order: OrderPayload): Promise<Order> {
    return this.orderService.create(order);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() order: OrderPayload): Promise<void> {
    return this.orderService.update(+id, order);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.orderService.remove(+id);
  }
}
