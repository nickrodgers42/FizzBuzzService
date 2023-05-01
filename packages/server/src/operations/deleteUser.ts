import { Operation } from "@aws-smithy/server-common"
import { DeleteUserInput, DeleteUserOutput } from "@fizzbuzz-service/server"

export interface DeleteUserContext {}

export const deleteUserOperation: Operation<
    DeleteUserInput,
    DeleteUserOutput,
    DeleteUserContext
> = async (input: any, __: any) => {
    console.log("DeleteUser operation called")
    return {
        response: `User ${input.name} deleted`,
    }
}
