import express, { Express, Request, Response } from "express"
import {
    PingServerInput,
    PingServerOutput,
    getFizzBuzzServiceHandler,
} from "@fizzbuzz-service/server"
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http"
import { Operation } from "@aws-smithy/server-common"

const app: Express = express()
const port = 8080

interface PingContext {}

const pingOperation: Operation<
    PingServerInput,
    PingServerOutput,
    PingContext
> = async (input: any, context: any) => {
    console.log(`Received Ping Operation from ${context}, ${input}`)
    return {
        message: "pong",
    }
}

const fizzBuzzServiceHandler = getFizzBuzzServiceHandler({
    Ping: pingOperation,
})

app.get("/*", async (req: Request, res: Response) => {
    console.log(req.path)
    console.log(req.headers ?? "this request has no headers")
    console.log(req.body ?? "this request has no body")

    const httpRequest = new HttpRequest({
        method: "GET",
        path: req.path,
        port,
        body: req.body,
    })
    const httpResponse: HttpResponse = await fizzBuzzServiceHandler.handle(
        httpRequest,
        {}
    )
    console.log(httpResponse)
    res.send(httpResponse)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
