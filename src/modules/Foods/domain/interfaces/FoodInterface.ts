import { baseTypeFoods, CaloriesTypes } from "../types/foods"

export interface FoodInterface extends baseTypeFoods  {
    id: string
    name: string
    description: string
    weight: number
    caloriesByWeight?: CaloriesTypes

}