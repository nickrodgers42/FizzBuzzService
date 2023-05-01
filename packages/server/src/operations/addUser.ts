import { Operation } from "@aws-smithy/server-common"
import { AddUserInput, AddUserOutput } from "@fizzbuzz-service/server"

export interface AddUserContext {}

export const addUserOperation: Operation<
    AddUserInput,
    AddUserOutput,
    AddUserContext
> = async (input: AddUserInput, __: any) => {
    console.log("AddUser operation called")

    return {
        response: `User ${input.userName} added`,
    }
}
