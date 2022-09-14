import { CategoryFood } from "@modules/Foods/domain/entities/CategoryFood"

export type category = {
    category: string
    idFood: number
    idCategory?: number
}

export interface ICategoryFoodRepository {
    insert(category: category): Promise<number>

    selectAll(conditions: {column: string, value: any}[]): Promise<CategoryFood[]>

    selectById(id: number): Promise<CategoryFood>

    updateById(category: category): Promise<number>

    updateByIds(category : category[]): Promise<number>

    deleteById(id: number): Promise<number>

    deleteByIds(ids: number[]): Promise<number>
}