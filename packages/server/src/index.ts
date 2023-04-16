import express, { Express, Request, Response } from "express"
import { getFizzBuzzServiceHandler } from "@fizzbuzz-service/server"
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http"
import { pingOperation } from "./operations/ping"
import { getFizzBuzzOperation } from "./operations/getFizzBuzz"
import { convertHeaders, setHeaders } from "./utils"

const app: Express = express()
const PORT = 8080

const fizzBuzzServiceHandler = getFizzBuzzServiceHandler({
    Ping: pingOperation,
    GetFizzBuzz: getFizzBuzzOperation,
})

app.get("/*", async (req: Request, res: Response) => {
    console.log(req.path)
    console.log(req.headers ?? "this request has no headers")
    console.log(req.body ?? "this request has no body")

    const httpRequest = new HttpRequest({
        method: "GET",
        path: req.path,
        port: PORT,
        headers: convertHeaders(req.headers),
        body: req.body,
    })
    const httpResponse: HttpResponse = await fizzBuzzServiceHandler.handle(
        httpRequest,
        {}
    )
    console.log(httpResponse)
    setHeaders(httpResponse.headers, res)
    res.send(httpResponse.body)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
