import { CategoryInterface } from "../interfaces"
import { categoryToDTO } from "../types/categoryFood"



class CategoryFood {
    private idCategory: number
    private category: string
    private idFood: number
    private createdAt: Date
    private updatedAt?: Date
    private active: number

    constructor(category: CategoryInterface) {
        this.idCategory = category.idCategory
        this.category = category.category
        this.idFood = category.idFood
        this.createdAt = category.createdAt
        this.updatedAt = category.updatedAt
        this.active = category.active
    }

    returnCategory(): string {
        return this.category
    }

    returnToDTO(): categoryToDTO {
        return {
            category: this.category,
            idFood: this.idFood
        }
    }
}

export { CategoryFood }