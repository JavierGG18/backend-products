import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto.js';
import { IsInt, IsOptional, Min } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsOptional() 
    @IsInt()
    @Min(0, { message: "El stock debe ser un valor positivo" })
    stock?: number; 
    
    @IsOptional()
    @IsInt()
    @Min(1, { message: "El precio debe ser un numero positivo y mayor a 0" })
    price?: number; 
}