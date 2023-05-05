import { Operation } from "@aws-smithy/server-common"
import { AddUserInput, AddUserOutput } from "@fizzbuzz-service/server"
import { Client } from "pg"

export interface AddUserContext {}

export const addUserOperation: Operation<
    AddUserInput,
    AddUserOutput,
    AddUserContext
> = async (input: AddUserInput, __: any) => {
    console.log("AddUser operation called")
    const client = new Client({
        host: "localhost",
        port: 8090,
        user: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        database: "fizzbuzz",
    })
    await client.connect()
    const getUserName = await client.query(
        "SELECT * FROM users where USERNAME = $1",
        [input.userName]
    )
    if (getUserName.rowCount > 0) {
        throw new Error(`User ${input.userName} already exists`)
    }

    const insertUser = await client.query(
        "INSERT INTO users (USERNAME) VALUES ($1)",
        [input.userName]
    )
    if (insertUser.rowCount === 0) {
        throw new Error(`Unable to add user ${input.userName}`)
    }
    return {
        response: `User ${input.userName} added`,
    }
}
