import {
    AddUserCommand,
    AddUserOutput,
    DeleteUserCommand,
    DeleteUserOutput,
    FizzBuzzClient,
    GetFizzBuzzCommand,
    GetFizzBuzzOutput,
    GetUserCommand,
    GetUserOutput,
    ListUsersCommand,
    ListUsersOutput,
    PingCommand,
} from "@fizzbuzz-service/client"
import { Command } from "commander"
import { UserCommands } from "./userCommands"

const endpoint = "http://localhost:8080"
const region = "fake-region"
const client = new FizzBuzzClient({ endpoint, region })
const program = new Command()
const userCommands = new UserCommands(client)

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

program
    .command("addUser")
    .description("Add a user to the server")
    .option("-n, --name <name>", "Name of the user")
    .action(userCommands.addUser.bind(userCommands))

program
    .command("deleteUser")
    .description("Delete a user from the server")
    .option("-n, --name <name>", "Name of the user")
    .action(userCommands.deleteUser.bind(userCommands))

program
    .command("getUser")
    .description("Get a user from the server")
    .option("-n, --name <name>", "Name of the user")
    .action(userCommands.getUser.bind(userCommands))

program
    .command("listUsers")
    .description("listUsers")
    .action(userCommands.listUsers.bind(userCommands))

const main = () => {
    program.parse()
}

main()
