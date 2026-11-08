import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto.js';
import { IsInt, IsOptional, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiPropertyOptional({ description: "Cantidad disponible en inventario actualizada", example: 5 })
    @IsOptional() 
    @IsInt()
    @Min(0, { message: "El stock debe ser un valor positivo" })
    stock?: number; 
    
    @ApiPropertyOptional({ description: "Precio unitario actualizado", example: 1100 })
    @IsOptional()
    @IsInt()
    @Min(1, { message: "El precio debe ser un numero positivo y mayor a 0" })
    price?: number; 
}