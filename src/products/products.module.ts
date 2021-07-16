import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { Product } from 'src/product';
import { ProductSchema } from './entities/product.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: 'Product', 
      schema: ProductSchema 
    }])
  ],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
