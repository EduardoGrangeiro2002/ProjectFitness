import { IPhotoInterface } from "../interfaces/IPhotoInterface"



class PhotoFood {
    private idPhotoFood: number
    private photoUrl: string
    private idFood: number
    private createdAt: Date
    private updatedAt?: Date
    private active: number


    constructor(photo: IPhotoInterface) {
        this.idPhotoFood = photo.idPhotoFood
        this.photoUrl = photo.photoUrl
        this.idFood = photo.idFood
        this.createdAt = photo.createdAt
        this.updatedAt = photo.updatedAt
        this.active = photo.active
    }

    getUrl () {
        return this.photoUrl
    }

    getPhotoFood() {
        return {
            idPhotoFood: this.idPhotoFood,
            photoUrl: this.photoUrl,
            idFood: this.idFood,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            active: this.active
        }
    }
}

export { PhotoFood }