import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from '../products';
import { Product } from '../product';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async index(): Promise<Products> {
    return this.productsService.findAll()
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Product> {
    return this.productsService.find(id)
  }

  @Post()
  create(@Body() product: Product) {
    return this.productsService.create(product)
  }

  @Put()
  update(@Body() product: Product) {
    return this.productsService.update(product)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.productsService.delete(id) 
  }
}
