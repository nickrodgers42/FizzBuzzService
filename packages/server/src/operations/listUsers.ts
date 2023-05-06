import { Operation } from "@aws-smithy/server-common"
import { ListUsersInput, ListUsersOutput } from "@fizzbuzz-service/server"
import { Client } from "pg"

export interface ListUsersContext {}

export const listUsersOperation: Operation<
    ListUsersInput,
    ListUsersOutput,
    ListUsersContext
> = async (input: any, __: any) => {
    console.log("ListUsers operation called")
    const client = new Client({
        host: "localhost",
        port: 8090,
        user: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        database: "fizzbuzz",
    })
    await client.connect()
    const listUsers = await client.query("SELECT username FROM users;")

    const userList: string[] = []
    for (let entry of listUsers.rows) {
        userList.push(entry.username)
    }

    return {
        response: userList,
    }
}
