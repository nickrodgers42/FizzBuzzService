import express, {Express, Request, Response} from 'express'
import { FizzBuzzServiceHandler } from '@fizzbuzz-service/server'

const app: Express = express();
const port = 8080

app.get('/', (req: Request, res: Response) => {
    res.send('Express + Typescript server');
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
