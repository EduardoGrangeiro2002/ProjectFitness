import bodyParser from "body-parser"
import { Server } from "http"
import Express from "express"
import  router from "./main/http/routes"
import "reflect-metadata"
import { Database } from "./main/infra/typeorm/dataSource"
import { DataSource } from "typeorm";

export let mysqlDatabase: DataSource

export class SetupApplication {
    private server?: Server
    public database: Database

    constructor(private port: number, public app = Express()) {}

    public init(): void {
        this.setupExpress()
        this.setupRoutes()
        this.setupDatabase()
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: true}))
    }

    private setupDatabase(): void {
        this.database = new Database()
        this.database.initializeDatabaseConn()
        mysqlDatabase = this.database.getDataSource()
    }

    private setupRoutes(): void {
        this.app.use(router)
    }

    public start(): void {  
        this.server = this.app.listen(this.port, () => console.log(`Server is runnning at port: ${this.port}`))
    }
}
