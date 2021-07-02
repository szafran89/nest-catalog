import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ProductsModule } from './products/products.module';

import * as dotenv from 'dotenv'
dotenv.config()
@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


