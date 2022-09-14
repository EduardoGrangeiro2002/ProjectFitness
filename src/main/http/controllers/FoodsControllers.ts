import { Request, Response } from "express";



export class FoodsControllers {
    constructor() {}

    async handle(req: Request, res: Response): Promise<Response> {
        return res.send("Hello World!")
    }

}