import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  findAll () {
    return this.productModel.find().exec()
  }

  async findOne (id: string) {
    const product = await this.productModel.findById(id)
    // const product = await this.productModel.findOne({ _id: id }).exec()
    if (!product) throw new Error('No product found.')
    return product
  }

  create (createProductDto: CreateProductDto) {
    const product = new this.productModel(createProductDto)
    return product.save()
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`Product #${id} not found.`);
    }

    return await this.productModel
      .findOneAndUpdate({ _id: id }, { $set: updateProductDto }, { new: true })
      .exec();
  }

  async delete(id: string) {
    const product = await this.findOne(id);
    return product.remove();
  }
}
