import { NutritionalInformation } from "@modules/Foods/domain/entities/NutritionalInformation"

export type nutritional = {
    idNutritionalInformation?: number
    name: string
    value: number
    VD: number
    idFood: number
}

export interface INutritionalInformationRepository {
    insert(nutritional: nutritional): Promise<number>

    selectAll(conditions: {column: string, value: any}[]): Promise<NutritionalInformation[]>

    selectById(id: number): Promise<NutritionalInformation>

    updateById(nutritional: nutritional): Promise<number>

    updateByIds(nutritional: nutritional): Promise<number>

    deleteById(id: number): Promise<number>

    deleteByIds(ids: number[]): Promise<number>
}