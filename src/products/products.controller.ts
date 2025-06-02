import { Controller,Get,Post,Param,Body,Put,Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
@Controller('products')
export class ProductsController {
    constructor(
        private readonly productService:ProductsService
    ){}

    @Get()
    async findall():Promise<Product[]>
    {
        return this.productService.findall()
    }
    @Get(':id')
    async findone(@Param('id') id:string):Promise<Product| null > {
        return this.productService.findOne(Number(id));
    }
    @Post()
    async create(@Body() cdto:Omit<Product,'id'>):Promise<Product>{
         return this.productService.create(cdto);
    }
     @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateData: Partial<Product>,
  ): Promise<Product> {
    return this.productService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.productService.remove(id);
  }
}
