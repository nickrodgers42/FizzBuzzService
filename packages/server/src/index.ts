import express, { Express, Request, Response } from "express"
import {
    getFizzBuzzServiceHandler,
} from "@fizzbuzz-service/server"
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http"
import { pingOperation } from "./operations/ping"
import { getFizzBuzzOperation } from "./operations/getFizzBuzz"

const app: Express = express()
const port = 8080

const fizzBuzzServiceHandler = getFizzBuzzServiceHandler({
    Ping: pingOperation,
    GetFizzBuzz: getFizzBuzzOperation
})

app.get("/*", async (req: Request, res: Response) => {
    console.log(req.path)
    console.log(req.headers ?? "this request has no headers")
    console.log(req.body ?? "this request has no body")

    const headers: Record<string, string> = {}
    for (const header in req.headers) {
        if (req.headers[header] === undefined) {
            continue
        }
        if (Array.isArray(req.headers[header])) {
            headers[header] = req.headers[header]!.toString()
        }
        else {
            headers[header] = String(req.headers[header])
        }
    }

    const httpRequest = new HttpRequest({
        method: "GET",
        path: req.path,
        port,
        headers,
        body: req.body,
    })
    const httpResponse: HttpResponse = await fizzBuzzServiceHandler.handle(
        httpRequest,
        {}
    )
    console.log(httpResponse)
    for (const key in httpResponse.headers) {
        res.set(key, httpResponse.headers[key])
    }
    res.send(httpResponse.body)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
