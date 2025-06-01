import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
@Module({
     imports:[
        MikroOrmModule.forFeature([Product])
    ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {
   
}
