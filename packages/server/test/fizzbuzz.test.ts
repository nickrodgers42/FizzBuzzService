import { FizzBuzz } from "../src/fizzbuzz"

const fizzBuzz: FizzBuzz = new FizzBuzz()

// Guiding test
test("FizzBuzz.getFizzBuzzString returns the correct output", () => {
    const fizzBuzzString: string = fizzBuzz.getFizzBuzzString()
    expect(fizzBuzzString).toContain("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz")
    expect(fizzBuzzString).toContain("91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz")
})

test.each([1,2,4])("fizzBuzz(%i) returns a string", (input: number) => {
    expect(fizzBuzz.fizzBuzz(input)).toBe(input.toString())
})

test.each([3,6,9])("fizzBuzz(%i) returns Fizz", (input: number) => {
    expect(fizzBuzz.fizzBuzz(input)).toBe("Fizz")
})

test.each([5,10,20])("fizzBuzz(%i) returns Buzz", (input: number) => {
    expect(fizzBuzz.fizzBuzz(input)).toBe("Buzz")
})

test.each([15,30,45])("fizzBuzz(%i) returns FizzBuzz", (input: number) => {
    expect(fizzBuzz.fizzBuzz(input)).toBe("FizzBuzz")
})
