import { FoodInterface } from "../interfaces"
import { CaloriesTypes } from "../types/foods/CaloriesTypes"
import { toDTOFood } from "../types/foods/toDTOFood"

class Food {
    private name: string
    private description: string
    private weight: number
    private caloriesByWeight?: CaloriesTypes
    private createdAt: Date
    private createdBy: number
    private updatedAt?: Date
    private updatedBy?: number
    private deletedAt?: Date
    private deletedBy?: number
    private active: number
    
    constructor (food: FoodInterface) {
        this.name = food.name
        this.description = food.description
        this.weight = food.weight
        this.caloriesByWeight = food.caloriesByWeight
        this.createdAt = food.createdAt
        this.createdBy = food.createdBy
        this.updatedAt = food.updatedAt
        this.updatedBy = food.updatedBy
        this.deletedAt = food.deletedAt
        this.deletedBy = food.deletedBy
        this.active = food.active
    }

    public getName(): string {
        return this.name
    }
    
    public getDescription(): string {
        return this.description
    }

    public getWeight(): number {
        return this.weight
    }

    public getCaloriesByWeight(): number {
        
        if(this.caloriesByWeight.calories && this.caloriesByWeight.weight) {
            return (this.weight / this.caloriesByWeight.weight) * this.caloriesByWeight.calories

        }

        return 0
    }

    public toDTO(food: Food): toDTOFood {
        const foodToDTO : toDTOFood = {
            name: food.name,
            description: food.description,
            weight: food.weight,
            calories: this.getCaloriesByWeight(),
            createdAt: food.createdAt,
            createdBy: food.createdBy,
            active: food.active,
        }

        if(food.updatedAt) foodToDTO.updatedAt = food.updatedAt
        if(food.updatedBy) foodToDTO.updatedBy = food.updatedBy

        
        return foodToDTO
    }
}

export { Food }