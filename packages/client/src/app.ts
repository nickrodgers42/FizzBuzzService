import { FizzBuzzClient, GetFizzBuzzCommand, GetFizzBuzzOutput, PingCommand } from "@fizzbuzz-service/client"

const main = () => {
    const endpoint = "http://localhost:8080"
    const client = new FizzBuzzClient({ endpoint })
    client.send(new PingCommand({}))
        .catch((err: any) => {
            console.log(err)
            process.exit(1)
        })
        .then((res: any) => {
            console.log(res)
        })
    client.send(new GetFizzBuzzCommand({}))
        .catch((err: any) => {
            console.log(err)
            process.exit(1)
        })
        .then((res: GetFizzBuzzOutput) => {
            console.log(res.fizzBuzzString)
        })
}

main()
