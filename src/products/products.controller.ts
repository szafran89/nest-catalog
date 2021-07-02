import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  // async index(): Promise<Products> {
  async index() {
    return this.productsService.findAll()
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return this.productsService.findOne(id)
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.productsService.delete(id) 
  }
}
