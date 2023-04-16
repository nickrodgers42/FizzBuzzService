import {
    FizzBuzzClient,
    GetFizzBuzzCommand,
    GetFizzBuzzOutput,
    PingCommand,
} from "@fizzbuzz-service/client"
import { Command } from "commander"

const endpoint = "http://localhost:8080"
const client = new FizzBuzzClient({ endpoint })
const program = new Command()

program
    .name("FizzBuzzClientCli")
    .description("CLI Client to use FizzBuzzService")
    .version("0.0.1")

program
    .command("ping")
    .description("ping the server")
    .action(() => {
        client
            .send(new PingCommand({}))
            .catch((err: any) => {
                console.log(err)
                process.exit(1)
            })
            .then((res: any) => {
                console.log(res.message)
            })
    })

program
    .command("getFizzBuzz")
    .description("Get FizzBuzz string from the server")
    .action(() => {
        client
            .send(new GetFizzBuzzCommand({}))
            .catch((err: any) => {
                console.log(err)
                process.exit(1)
            })
            .then((res: GetFizzBuzzOutput) => {
                console.log(res.fizzBuzzString)
            })
    })

const main = () => {
    program.parse()
}

main()
