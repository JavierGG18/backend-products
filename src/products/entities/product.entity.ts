import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    name: string;

    @Column()
    description: string;

    @Column()
    stock: number;

    @Column()
    price: number;
}
