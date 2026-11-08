import { IsInt, IsString, Min, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({ description: "Nombre del producto", example: "Laptop Gamer" })
    @IsString()
    @MinLength(3, {message: "El nombre del producto debe tener al menos 3 caracteres"})
    name: string;

    @ApiProperty({ description: "Descripción detallada del producto", example: "Laptop con 16GB de RAM y tarjeta gráfica dedicada" })
    @IsString()
    description: string;

    @ApiProperty({ description: "Cantidad disponible en inventario", example: 10 })
    @IsInt()
    @Min(1, {message: "Para dar de alta un producto el stock debe ser igual o mayor a 1"})
    stock: number;
     
    @ApiProperty({ description: "Precio unitario del producto", example: 1200 })
    @IsInt()
    @Min(1, {message: "El precio debe ser un numero positivo y mayor a 0"})
    price: number;
}