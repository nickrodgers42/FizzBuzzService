import { getFizzBuzzServiceHandler } from "@fizzbuzz-service/server"
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http"
import { pingOperation } from "./operations/ping"
import { getFizzBuzzOperation } from "./operations/getFizzBuzz"
import { convertQueryParams } from "./utils"
import { addUserOperation } from "./operations/addUser"
import { getUserOperation } from "./operations/getUser"
import { deleteUserOperation } from "./operations/deleteUser"
import * as dotenv from "dotenv"
import { listUsersOperation } from "./operations/listUsers"
import http, { IncomingMessage, ServerResponse } from "http"

dotenv.config()
const PORT = 8080

const fizzBuzzServiceHandler = getFizzBuzzServiceHandler({
    Ping: pingOperation,
    GetFizzBuzz: getFizzBuzzOperation,
    AddUser: addUserOperation,
    GetUser: getUserOperation,
    DeleteUser: deleteUserOperation,
    ListUsers: listUsersOperation,
})

const server = http
    .createServer((req: IncomingMessage, res: ServerResponse) => {
        console.log("Recieved request")
        console.log("Path:", req.url)
        console.log("Method:", req.method)
        console.log("Headers:", req.headers ?? "this request has no headers")
        const url = new URL(req.url || "", `http://${req.headers.host}`)
        console.log("Url:", url)
        console.log("Query:", convertQueryParams(url.searchParams))
        let body = ""

        req.on("data", (chunk) => {
            body += chunk
        })

        req.on("end", async () => {
            console.log(
                "body:",
                body !== "" ? body : "this request has no body"
            )

            const httpRequest = new HttpRequest({
                method: req.method,
                path: url.pathname,
                port: 8081,
                headers: req.headers as any,
                body: body === "" ? undefined : Buffer.from(body),
                query: convertQueryParams(url.searchParams) as any,
            })
            const httpResponse: HttpResponse =
                await fizzBuzzServiceHandler.handle(httpRequest, {})
            res.end(httpResponse.body)
        })
    })
    .listen(PORT)
server.on("listening", () => {
    console.log(`listening on port ${PORT}`)
})
