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

const endpoint = "http://localhost:8080"
const region = "fake-region"
const client = new FizzBuzzClient({ endpoint, region })
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

program
    .command("addUser")
    .description("Add a user to the server")
    .option("-n, --name <name>", "Name of the user")
    .action((options, _) => {
        console.log(`Attempting to add user ${options.name}`)
        client
            .send(
                new AddUserCommand({
                    userName: options.name,
                })
            )
            .catch((err: any) => {
                console.log(err)
                process.exit(1)
            })
            .then((res: AddUserOutput) => {
                console.log(res.response)
            })
    })

program
    .command("deleteUser")
    .description("Delete a user from the server")
    .option("-n, --name <name>", "Name of the user")
    .action((options, _) => {
        console.log(`Attempting to delete user ${options.name}`)
        client
            .send(
                new DeleteUserCommand({
                    userName: options.name,
                })
            )
            .catch((err: any) => {
                console.log(err)
                process.exit(1)
            })
            .then((res: DeleteUserOutput) => {
                console.log(res.response)
            })
    })

program
    .command("getUser")
    .description("Get a user from the server")
    .option("-n, --name <name>", "Name of the user")
    .action((options, _) => {
        console.log(`Attempting to get user ${options.name}`)
        client
            .send(
                new GetUserCommand({
                    userName: options.name,
                })
            )
            .catch((err: any) => {
                console.log(err)
                process.exit(1)
            })
            .then((res: GetUserOutput) => {
                console.log(res.response)
            })
    })

program
    .command("listUsers")
    .description("listUsers")
    .action((options, _) => {
        console.log(`Attempting to list users`)
        client
            .send(
                new ListUsersCommand({})
            )
            .catch((err: any) => {
                console.log(err)
                process.exit(1)
            })
            .then((res: ListUsersOutput) => {
                console.log(res.response)
            })
    })

const main = () => {
    program.parse()
}

main()
