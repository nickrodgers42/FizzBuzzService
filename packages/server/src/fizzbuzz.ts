export class FizzBuzz {
    public getFizzBuzzString(): string {
        let fizzBuzzString: string = ""
        for (let i = 1; i <= 100; ++i) {
            if (i % 15 == 0) {
                fizzBuzzString += "FizzBuzz"
            }
            else if (i % 3 == 0) {
                fizzBuzzString += "Fizz"
            }
            else if (i % 5 == 0) {
                fizzBuzzString += "Buzz"
            }
            else {
                fizzBuzzString += i.toString()
            }
            fizzBuzzString += " "
        }
        return fizzBuzzString
    }

    public fizzBuzz(n: number): string {
        if (n % 15 == 0) {
            return "FizzBuzz"
        }
        if (n % 3 == 0) {
            return "Fizz"
        }
        if (n % 5 == 0) {
            return "Buzz"
        }
        return n.toString()
    }
}
