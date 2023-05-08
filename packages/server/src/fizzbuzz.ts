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

    public getBetterFizzBuzzString(): string {
        let fizzBuzzString: string = ""
        for (let i = 1; i <= 100; ++i) {
            fizzBuzzString += this.fizzBuzz(i) + " "
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

    public fizzBuzzBazz(n: number): string {
        const defaultRule = new Rule(() => true, (input: number) => input.toString())
        const rules: Rule[] = [
            new ModRule(3, "Fizz"),
            new ModRule(5, "Buzz"),
            new ModRule(7, "Bazz"),
        ]
        let fizzBuzzString = ""
        for (const rule of rules) {
            if (rule.matches(n)) {
                fizzBuzzString += rule.transform(n)
            }
        }
        if (fizzBuzzString == "") {
            fizzBuzzString = defaultRule.transform(n)
        }
        return fizzBuzzString
    }

    public fizzBuzzBazz2(n: number): string {
        const rules: Rule[] = [
            new Rule((input: number) => (input % 105 == 0), () => "FizzBuzzBazz"),
            new Rule((input: number) => (input % 35 == 0), () => "BuzzBazz"),
            new Rule((input: number) => (input % 21 == 0), () => "FizzBazz"),
            new Rule((input: number) => (input % 15 == 0), () => "FizzBuzz"),
            new Rule((input: number) => (input % 7 == 0), () => "Bazz"),
            new Rule((input: number) => (input % 5 == 0), () => "Buzz"),
            new Rule((input: number) => (input % 3 == 0), () => "Fizz"),
            new Rule(() => true, (input: number) => input.toString())
        ]
        for (const rule of rules) {
            if (rule.matches(n)) {
                return rule.transform(n)
            }
        }
        throw new Error("No rule matched")
    }
}

export class Rule {
    private matchingFunction: Function
    private transformFunction: Function

    constructor(matchingFunction: Function, transformFunction: Function) {
        this.matchingFunction = matchingFunction
        this.transformFunction = transformFunction
    }

    public matches(input: number): boolean {
        return this.matchingFunction(input)
    }

    public transform(input: number): string {
        return this.transformFunction(input)
    }
}

export class ModRule extends Rule {
    constructor(modVal: number, returnValue: string) {
        super((input: number) => (input % modVal == 0), () => returnValue)
    }
}
