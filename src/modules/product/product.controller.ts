import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ApiTags } from '@nestjs/swagger';
import { ProductPayload } from './product.payload';

@Controller('products')
@ApiTags('Products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(+id);
  }

  @Post()
  create(@Body() product: ProductPayload): Promise<Product> {
    return this.productService.create(product);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() product: ProductPayload,
  ): Promise<void> {
    return this.productService.update(+id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productService.remove(+id);
  }
}
