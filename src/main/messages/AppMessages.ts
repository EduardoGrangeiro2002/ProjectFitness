export default class AppMessages {
    private readonly name: string
    private readonly message: string
    private readonly statusCode: number

    constructor(statusCode = 200, message: string) {
        this.name = "AppMessages"
        this.message = message
        this.statusCode = statusCode
    }

    getResponseMessage() {
        return {
            message: this.message,
            statusCode: this.statusCode,
        }
    }
}