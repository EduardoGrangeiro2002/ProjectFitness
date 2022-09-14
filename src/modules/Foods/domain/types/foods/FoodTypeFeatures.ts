import { categoryFood } from "../categoryFood"
import { nutritionalInformation } from "../nutritionalInformation"
import { photoFood } from "../photoFood"



export namespace FoodTypeFeatures {
    export type createParams = {
        name: string
        description: string
        weight: number
        category?: categoryFood
        photoFood?: photoFood
        nutritionalInformation?: nutritionalInformation
    }
    export type listConditions = {
        column: string
        value: any 
    }

    export type ListById = {
        id: number
    }
}