import { Injectable,NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly entityRepositor:EntityRepository<Product>,
        private readonly em:EntityManager,
    ){}

    async findall():Promise<Product[]>{
        return this.entityRepositor.findAll()
    }

  async findOne(id: number): Promise<Product | null> {
    return this.entityRepositor.findOne(id)
  }


   async create(productData: Omit<Product, 'id'>): Promise<Product> {
    const product = new Product(
      productData.name,
      productData.description,
      productData.price,
      productData.stock,
    );
    await this.em.persistAndFlush(product);
    return product;
  }
  async update(id:number,updateData:Partial<Product>):Promise<Product>{
    const product=await this.findOne(id)
    if(!product){
      throw new NotFoundException("Product Not Found")
    }
    this.em.assign(product,updateData)
    await this.em.flush()
    return product;
  }

  async remove(id: number): Promise<void> {
    const product = await this.entityRepositor.findOne(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    await this.em.removeAndFlush(product);
  }
}
