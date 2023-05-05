import { Operation } from "@aws-smithy/server-common"
import { DeleteUserInput, DeleteUserOutput } from "@fizzbuzz-service/server"
import { Client } from "pg"

export interface DeleteUserContext {}

export const deleteUserOperation: Operation<
    DeleteUserInput,
    DeleteUserOutput,
    DeleteUserContext
> = async (input: any, __: any) => {
    console.log("DeleteUser operation called")
    const client = new Client({
        host: "localhost",
        port: 8090,
        user: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        database: "fizzbuzz",
    })
    await client.connect()
    const deleteUser = await client.query(
        "DELETE FROM users where USERNAME = $1",
        [input.userName]
    )

    if (deleteUser.rowCount === 0) {
        throw new Error(`Unable to delete user ${input.userName}`)
    }

    return {
        response: `User ${input.userName} deleted`,
    }
}
