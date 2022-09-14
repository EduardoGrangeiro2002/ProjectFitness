import { Router } from "express"
import  FoodsRouter  from "./FoodsRouter";

class Routes  {
    static define(router: Router): Router {
        router.use("/foods", FoodsRouter)

        return router
    }
}


export default Routes.define(Router());
