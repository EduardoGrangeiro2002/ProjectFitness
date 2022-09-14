


export namespace TypesRepository {
    export type insertParams = {
        name: string
        description: string
        weight: number
    }

    export type selectAllParams = {
        column: string
        value: any
    }
    
    export type updateByIdParams = {
        id: number
        name: string
        description: string
        weight: number
    }

}