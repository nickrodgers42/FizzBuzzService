import { Operation } from "@aws-smithy/server-common"
import { PingServerInput, PingServerOutput } from "@fizzbuzz-service/server"

export interface PingContext {}

export const pingOperation: Operation<
    PingServerInput,
    PingServerOutput,
    PingContext
> = async (input: any, context: any) => {
    console.log(`Received Ping Operation from ${context}, ${input}`)
    return {
        message: "pong",
    }
}
