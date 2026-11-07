import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ){}

  private async findByName(name : string) : Promise<Product | null> {
    const product =  await this.productRepository.findOne({ where: {name} });
    return product;
  }

  private async findById(id : number) : Promise<Product | null> {
    const product =  await this.productRepository.findOne({ where: {id} });
    return product;
  }

  async create(createProductDto: CreateProductDto) : Promise<Product> {
    //verificar si existe el producto en base al nombre
    const exists = await this.findByName(createProductDto.name);
    if(exists){
      throw new BadRequestException(`El producto con el nombre: ${exists.name} ya se encuentra registrado`);
    }
    
    const product = await this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

  async findAll() : Promise<Product[]> {
    const products = await this.productRepository.find();
    return products;
  }

  async findOne(id: number) : Promise<Product> {
    //verificar si existe el producto en base al id
    const product = await this.findById(id);
    if(!product){
      throw new NotFoundException(`El producto con id: ${id} no existe`)
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    //verificar si existe el producto en base al id
    const product = await this.findById(id);
    if(!product){
      throw new NotFoundException(`El producto con id: ${id} no existe`)
    }

    await this.productRepository.update(id, updateProductDto);
    return { message : "Producto actualizado exitosamente" };
  }

  async remove(id: number) {
    //verificar si existe el producto en base al id
    const product = await this.findById(id);
    if(!product){
      throw new NotFoundException(`El producto con id: ${id} no existe`)
    }

    return await this.productRepository.remove(product);
  }
}
