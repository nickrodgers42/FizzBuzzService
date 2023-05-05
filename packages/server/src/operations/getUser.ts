import { Operation } from "@aws-smithy/server-common"
import { GetUserInput, GetUserOutput } from "@fizzbuzz-service/server"
import { Client } from "pg"

export interface GetUserContext {}

export const getUserOperation: Operation<
    GetUserInput,
    GetUserOutput,
    GetUserContext
> = async (input: any, __: any) => {
    console.log("GetUser operation called")
    const client = new Client({
        host: "localhost",
        port: 8090,
        user: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        database: "fizzbuzz",
    })
    await client.connect()
    const getUser = await client.query(
        "SELECT * FROM users where USERNAME = $1",
        [input.userName]
    )
    console.log(getUser)
    if (getUser.rowCount === 0) {
        throw new Error(`Unable to get user ${input.userName}`)
    }

    return {
        response: `User ${getUser.rows[0].username} found`,
    }
}
