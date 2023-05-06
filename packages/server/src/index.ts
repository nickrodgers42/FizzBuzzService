import express, { Express, Request, Response } from "express"
import { getFizzBuzzServiceHandler } from "@fizzbuzz-service/server"
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http"
import { pingOperation } from "./operations/ping"
import { getFizzBuzzOperation } from "./operations/getFizzBuzz"
import { convertHeaders, setHeaders } from "./utils"
import { addUserOperation } from "./operations/addUser"
import bodyParser from "body-parser"
import { getUserOperation } from "./operations/getUser"
import { deleteUserOperation } from "./operations/deleteUser"
import * as dotenv from "dotenv"
import { listUsersOperation } from "./operations/listUsers"

dotenv.config()
const app: Express = express()
const PORT = 8080

const fizzBuzzServiceHandler = getFizzBuzzServiceHandler({
    Ping: pingOperation,
    GetFizzBuzz: getFizzBuzzOperation,
    AddUser: addUserOperation,
    GetUser: getUserOperation,
    DeleteUser: deleteUserOperation,
    ListUsers: listUsersOperation,
})

app.use(bodyParser.raw({ type: "*/*" }))
app.set("query parser", "simple")
app.all("/*", async (req: Request, res: Response) => {
    console.log("Recieved request")
    console.log("Path:", req.path)
    console.log("Method:", req.method)
    console.log("headers", req.headers ?? "this request has no headers")
    console.log(
        "body",
        req.body ? req.body.toString() : "this request has no body"
    )
    console.log("query", req.query)
    console.log(req.body)
    const httpRequest = new HttpRequest({
        method: req.method,
        path: req.path,
        port: PORT,
        headers: convertHeaders(req.headers),
        body: req.method === "GET" || "DELETE" ? undefined : req.body,
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
