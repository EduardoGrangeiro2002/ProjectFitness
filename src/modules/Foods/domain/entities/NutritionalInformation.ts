import { INutritionalInterface } from "../interfaces"



class NutritionalInformation {
    private idNutritionalInformation: number
    private name: string
    private value: number
    private VD: number
    private idFood: number
    private createdAt: Date
    private updatedAt?: Date
    private active: number

    constructor(nutritional: INutritionalInterface) {
        this.idNutritionalInformation = nutritional.idNutritionalInformation
        this.name = nutritional.name
        this.value = nutritional.value
        this.VD = nutritional.VD
        this.idFood = nutritional.idFood
        this.createdAt = nutritional.createdAt
        this.updatedAt = nutritional.updatedAt
        this.active = nutritional.active
    }

    getName() {
        return this.name
    }

    getToDTO () {
        return {
            idNutritionalInformation: this.idNutritionalInformation,
            name: this.name,
            value: this.value,
            VD: this.VD,
            idFood: this.idFood,
            active: this.active
        }
    }
}

export { NutritionalInformation }