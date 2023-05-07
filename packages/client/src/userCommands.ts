import {
    AddUserCommand,
    AddUserOutput,
    DeleteUserCommand,
    DeleteUserOutput,
    FizzBuzzClient,
    GetUserCommand,
    GetUserOutput,
    ListUsersCommand,
    ListUsersOutput,
} from "@fizzbuzz-service/client"

export class UserCommands {
    private readonly client: FizzBuzzClient

    constructor(client: FizzBuzzClient) {
        this.client = client
    }

    public addUser(options: any): void {
        console.log(`Attempting to add user ${options.name}`)
        console.log(this)
        this.client
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
    }

    public deleteUser(options: any): void {
        console.log(`Attempting to delete user ${options.name}`)
        this.client
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
    }

    public getUser(options: any): void {
        console.log(`Attempting to get user ${options.name}`)
        this.client
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
    }

    public listUsers(): void {
        console.log(`Attempting to list users`)
        this.client
            .send(new ListUsersCommand({}))
            .catch((err: any) => {
                console.log(err)
                process.exit(1)
            })
            .then((res: ListUsersOutput) => {
                console.log(res.response)
            })
    }
}
