import { Router } from "express"
import { FoodsControllers } from "../controllers"


const router = Router()
const foodsControllers = new FoodsControllers()

router.get("/", foodsControllers.handle)


export default router