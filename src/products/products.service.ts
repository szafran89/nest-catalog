import { Injectable } from '@nestjs/common';
import { Product } from '../product';
import { Products } from '../products';

@Injectable()
export class ProductsService {
  private readonly products: Products = {
    1: {
      id: 1,
      name: 'Product name',
      description: '',
      image: ''
    },
    2: {
      id: 2,
      name: 'Product name 2',
      description: 'desc 3',
      image: 'image url'
    }
  }

  findAll (): Products {
    return this.products
  }

  create (newProduct: Product) {
    const id = Date.now()
    this.products[id] = { ...newProduct, id }
  }


  find (id: number): Product {
    const product: Product = this.products[id]
    if (!product) throw new Error('No product found.')
    return product
  }

  update (product: Product) {
    if (!this.products[product.id]) throw new Error('No product found.')
    this.products[product.id] = product
  }

  delete (id: number) {
    const product: Product = this.products[id]
    if (!product) throw new Error('No product found.')
    delete this.products[id]
  }
}
