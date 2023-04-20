import express, { Express, Request, Response } from "express"
import { getFizzBuzzServiceHandler } from "@fizzbuzz-service/server"
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http"
import { pingOperation } from "./operations/ping"
import { getFizzBuzzOperation } from "./operations/getFizzBuzz"
import { convertHeaders, setHeaders } from "./utils"
import { addUserOperation } from "./operations/addUser"
import bodyParser from "body-parser"

const app: Express = express()
const PORT = 8080

const fizzBuzzServiceHandler = getFizzBuzzServiceHandler({
    Ping: pingOperation,
    GetFizzBuzz: getFizzBuzzOperation,
    AddUser: addUserOperation,
})

app.use(bodyParser.raw({ type: "*/*" }))
app.all("/*", async (req: Request, res: Response) => {
    console.log("Recieved request")
    console.log(req.path)
    console.log("headers", req.headers ?? "this request has no headers")
    console.log("body", req.body ? req.body.toString() : "this request has no body")
    const httpRequest = new HttpRequest({
        method: req.method,
        path: req.path,
        port: PORT,
        headers: convertHeaders(req.headers),
        body: req.method === "GET" ? undefined : req.body,
    })
    const httpResponse: HttpResponse = await fizzBuzzServiceHandler.handle(
        httpRequest,
        {}
    )
    console.log(httpResponse)
    setHeaders(httpResponse.headers, res)
    res.statusCode = httpResponse.statusCode
    res.send(httpResponse.body)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
