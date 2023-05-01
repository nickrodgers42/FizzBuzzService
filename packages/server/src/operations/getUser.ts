import { Operation } from "@aws-smithy/server-common"
import { GetUserInput, GetUserOutput } from "@fizzbuzz-service/server"

export interface GetUserContext {}

export const getUserOperation: Operation<
    GetUserInput,
    GetUserOutput,
    GetUserContext
> = async (input: any, __: any) => {
    console.log("GetUser operation called")
    return {
        response: `Getting user ${input.name}`,
    }
}
