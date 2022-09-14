import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity("food")
class FoodTypeorm {

    @PrimaryGeneratedColumn("increment", {name: "id_food"})
    idFood: number

    @Column()
    description: string

    @Column()
    weight: number
    
    @Column()
    active: number

    @CreateDateColumn({name: "created_at"})
    createdAt: Date

    @Column({name: "created_by"})
    createdBy: number

    @CreateDateColumn({name: "updated_at"})
    updatedAt: Date

    @Column({name: "updated_by"})
    updatedBy: number

    @CreateDateColumn({name: "deleted_at"})
    deletedAt: Date

    @Column({name: "deleted_by"})
    deletedBy: number
}


export { FoodTypeorm }