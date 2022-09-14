import AppMessages from "@main/messages/AppMessages"
import { toDTOFood } from "../types/foods"
import { FoodTypeFeatures } from "../types/foods"

export interface FeatureFood {
    create(payload: FoodTypeFeatures.createParams): Promise<AppMessages>

    ListAll(conditions: FoodTypeFeatures.listConditions): Promise<toDTOFood[]>

    ListById(id: FoodTypeFeatures.ListById): Promise<toDTOFood>

    updateById(payload: FoodTypeFeatures.createParams): Promise<AppMessages>

    updatedByIds(payload: FoodTypeFeatures.createParams[]): Promise<AppMessages>
}