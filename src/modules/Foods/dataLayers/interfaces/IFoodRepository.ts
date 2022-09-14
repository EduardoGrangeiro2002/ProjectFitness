import { Food } from "@modules/Foods/domain/entities/Food."
import { TypesRepository } from "../types"


export interface IFoodRepository {
    insert(food: TypesRepository.insertParams): Promise<number>

    selectAll(conditions: TypesRepository.selectAllParams[]): Promise<Food[]>

    selectById(id: number): Promise<Food>

    updateById(food: TypesRepository.updateByIdParams): Promise<number>

    updateByIds(food: TypesRepository.updateByIdParams[]): Promise<number>

    deleteById(id: number): Promise<number>

    deleteByIds(id: number[]): Promise<number>
}