import { Injectable } from '@nestjs/common';
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
}
