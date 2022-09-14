import { IFoodRepository } from "@modules/Foods/dataLayers/interfaces";
import { TypesRepository } from "@modules/Foods/dataLayers/types";
import { Food } from "@modules/Foods/domain/entities/Food.";
import { FoodTypeorm } from "../entities/Food";
import { Repository } from "typeorm"
import { mysqlDatabase } from "app";



export class FoodRepository implements IFoodRepository {
    private foodRepository: Repository<FoodTypeorm>

    constructor() {
        this.foodRepository = mysqlDatabase.getRepository(FoodTypeorm)
    }

    async insert(food: TypesRepository.insertParams): Promise<number> {
         const foodTypeorm = this.foodRepository.create(food)
         const { idFood } = foodTypeorm

         await this.foodRepository.save(foodTypeorm)

         return idFood
    }
    async selectAll(conditions: TypesRepository.selectAllParams[]): Promise<Food[]> {
        const foods = await this.foodRepository.find()

        return foods as unknown as Food[]
    }
    selectById(id: number): Promise<Food> {
        throw new Error("Method not implemented.");
    }
    updateById(food: TypesRepository.updateByIdParams): Promise<number> {
        throw new Error("Method not implemented.");
    }
    updateByIds(food: TypesRepository.updateByIdParams[]): Promise<number> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: number): Promise<number> {
        throw new Error("Method not implemented.");
    }
    deleteByIds(id: number[]): Promise<number> {
        throw new Error("Method not implemented.");
    }
}