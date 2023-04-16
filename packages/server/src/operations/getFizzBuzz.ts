import { Operation } from "@aws-smithy/server-common"
import {
    GetFizzBuzzServerInput,
    GetFizzBuzzServerOutput,
} from "@fizzbuzz-service/server"

export interface GetFizzBuzzContext {}

export const getFizzBuzzOperation: Operation<
    GetFizzBuzzServerInput,
    GetFizzBuzzServerOutput,
    GetFizzBuzzContext
> = async (_: any, __: any) => {
    let fizzBuzzString: string = ""
    for (let i = 1; i <= 100; ++i) {
        let temp: string = ""
        if (i % 3 == 0) {
            temp += "Fizz"
        }
        if (i % 5 == 0) {
            temp += "Buzz"
        }
        if (temp == "") {
            temp += Number(i).toString()
        }
        fizzBuzzString += temp + " "
    }

    return {
        fizzBuzzString: fizzBuzzString,
    }
}
