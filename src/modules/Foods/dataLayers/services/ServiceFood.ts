import { FeatureFood } from "@modules/Foods/domain/features/FeaturesFood";
import { FoodTypeFeatures, toDTOFood } from "@modules/Foods/domain/types/foods";
import { ICategoryFoodRepository, IFoodRepository, INutritionalInformationRepository, IPhotoFoodRepository } from "../interfaces";
import AppError  from "@main/errors/AppError"
import AppMessages from "@main/messages/AppMessages";


class ServiceFood implements FeatureFood {
    constructor (
        private readonly foodRepository: IFoodRepository,
        private readonly categoryFoodRepository: ICategoryFoodRepository,
        private readonly photoFoodRepository: IPhotoFoodRepository,
        private readonly nutritionalInformationRepository: INutritionalInformationRepository
    ) {}    

    async create({ description, name, weight, category, nutritionalInformation, photoFood }: FoodTypeFeatures.createParams): Promise<AppMessages> {
       
        const foodAlreadyExists = await this.foodRepository.selectAll([{column: "name", value: name}])
        const categoryAlreadyExists = await this.categoryFoodRepository.selectAll([{column: "category", value: category.category}])
        const nutritionalAlreadyExistis = await this.photoFoodRepository.selectAll([{column: "name", value: nutritionalInformation.name}])

        switch (true) {
            case foodAlreadyExists.length > 0:
                throw new AppError("Food already exists!")
            
            case categoryAlreadyExists.length > 0:
                throw new AppError("Category already exists!")
            
            case nutritionalAlreadyExistis.length > 0: 
                throw new AppError("Nutritional Information already exists!")
        }

            const idFood = await this.foodRepository.insert({name, description, weight})

            await this.categoryFoodRepository.insert({
                category: category.category, 
                idFood: idFood
            })

            await this.nutritionalInformationRepository.insert({
                idFood: idFood, 
                name: nutritionalInformation.name, 
                value: nutritionalInformation.value, 
                VD: nutritionalInformation.VD
            })

            await this.photoFoodRepository.insert({
                idFood: idFood, 
                photoUrl: photoFood.photoUrl
            })

        const message =  new AppMessages(200, "Food created with success!")

        return message
    }

    ListAll(conditions: FoodTypeFeatures.listConditions): Promise<toDTOFood[]> {
        throw new Error("Method not implemented.");
    }

    ListById(id: FoodTypeFeatures.ListById): Promise<toDTOFood> {
        throw new Error("Method not implemented.");
    }

    updateById(payload: FoodTypeFeatures.createParams): Promise<AppMessages> {
        throw new Error("Method not implemented.");
    }

    updatedByIds(payload: FoodTypeFeatures.createParams[]): Promise<AppMessages> {
        throw new Error("Method not implemented.");
    }
}


export { ServiceFood }