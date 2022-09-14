import { FoodTypeorm } from "../../../modules/Foods/infra/typeorm/entities/Food";
import { DataSource } from "typeorm";

class Database {
    private dataSource: DataSource
    constructor () {}

    initializeDatabaseConn() {
        this.dataSource = new DataSource({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "api",
            password: "123456",
            database: "fitness",
            entities: [FoodTypeorm]
        })

        this.dataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization")
        })
    }

    getDataSource(): DataSource {
        return this.dataSource
    }
}

export { Database }