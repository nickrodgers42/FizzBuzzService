import { FizzBuzzClient, PingCommand } from "@fizzbuzz-service/client"

const main = () => {
    const endpoint = "http://localhost:8080"
    const client = new FizzBuzzClient({ endpoint })
    client.send(new PingCommand({}))
        .catch(err => {
            console.log(err)
            process.exit(1)
        })
        .then(res => {
            console.log(res)
        })
}

main()
