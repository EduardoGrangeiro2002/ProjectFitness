import { PhotoFood } from "@modules/Foods/domain/entities/PhotoFood"
import { TypesRepository } from "../types"


export type photo = {
    idPhotoFood?: number
    photoUrl: string
    idFood: number
}

export interface IPhotoFoodRepository {
    insert(photo: photo): Promise<number>

    selectAll(conditions: {column: string, value: any}[]): Promise<PhotoFood[]>

    selectById(id: number): Promise<PhotoFood>

    updateById(photo: photo): Promise<number>

    updateByIds(photo: photo[]): Promise<number>

    deleteById(id: number): Promise<number>

    deleteByIds(ids: number[]): Promise<number>

}