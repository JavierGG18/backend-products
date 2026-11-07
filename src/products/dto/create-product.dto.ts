import { IsInt, IsString, Min, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MinLength(3, {message: "El nombre del producto debe tener al menos 3 caracteres"})
    name: string;

    @IsString()
    description: string;

    @IsInt()
    @Min(1, {message: "Para dar de alta un producto el stock debe ser igual o mayor a 1"})
    stock: number;
     
    @IsInt()
    @Min(1, {message: "El precio debe ser un numero positivo y mayor a 0"})
    price: number;
}
