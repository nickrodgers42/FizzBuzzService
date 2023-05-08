import { FizzBuzz } from "../src/fizzbuzz"

const fizzBuzz: FizzBuzz = new FizzBuzz()

// Guiding test
test("FizzBuzz.getFizzBuzzString returns the correct output", () => {
    const fizzBuzzString: string = fizzBuzz.getFizzBuzzString()
    expect(fizzBuzzString).toContain(
        "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz"
    )
    expect(fizzBuzzString).toContain("91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz")
})

test.each([1, 2, 4])("fizzBuzz(%i) returns a string", (input: number) => {
    expect(fizzBuzz.fizzBuzz(input)).toBe(input.toString())
})

test.each([3, 6, 9])("fizzBuzz(%i) returns Fizz", (input: number) => {
    expect(fizzBuzz.fizzBuzz(input)).toBe("Fizz")
})

test.each([5, 10, 20])("fizzBuzz(%i) returns Buzz", (input: number) => {
    expect(fizzBuzz.fizzBuzz(input)).toBe("Buzz")
})

test.each([15, 30, 45])("fizzBuzz(%i) returns FizzBuzz", (input: number) => {
    expect(fizzBuzz.fizzBuzz(input)).toBe("FizzBuzz")
})

test("FizzBuzz.getBetterFizzBuzzString returns the correct output", () => {
    const fizzBuzzString: string = fizzBuzz.getBetterFizzBuzzString()
    expect(fizzBuzzString).toContain(
        "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz"
    )
    expect(fizzBuzzString).toContain("91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz")
})

test.each([1, 2, 4])("fizzBuzzBazz(%i) returns a string", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz(input)).toBe(input.toString())
})

test.each([3, 6, 9])("fizzBuzzBazz(%i) returns Fizz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz(input)).toBe("Fizz")
})

test.each([5, 10, 20])("fizzBuzzBazz(%i) returns Buzz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz(input)).toBe("Buzz")
})

test.each([15, 30, 45])("fizzBuzzBazz(%i) returns FizzBuzz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz(input)).toBe("FizzBuzz")
})

test.each([7, 14, 28])("fizzBuzzBazz(%i) returns Bazz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz(input)).toBe("Bazz")
})

test.each([21, 42, 63])("fizzBuzzBazz(%i) returns FizzBazz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz(input)).toBe("FizzBazz")
})

test.each([35, 70, 140])("fizzBuzzBazz(%i) returns BuzzBazz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz(input)).toBe("BuzzBazz")
})

test.each([105])("fizzBuzzBazz(%i) returns FizzBuzzBazz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz(input)).toBe("FizzBuzzBazz")
})

test.each([1, 2, 4])("fizzBuzzBazz2(%i) returns a string", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz2(input)).toBe(input.toString())
})

test.each([3, 6, 9])("fizzBuzzBazz2(%i) returns Fizz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz2(input)).toBe("Fizz")
})

test.each([5, 10, 20])("fizzBuzzBazz2(%i) returns Buzz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz2(input)).toBe("Buzz")
})

test.each([15, 30, 45])("fizzBuzzBazz2(%i) returns FizzBuzz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz2(input)).toBe("FizzBuzz")
})

test.each([7, 14, 28])("fizzBuzzBazz2(%i) returns Bazz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz2(input)).toBe("Bazz")
})

test.each([21, 42, 63])("fizzBuzzBazz2(%i) returns FizzBazz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz2(input)).toBe("FizzBazz")
})

test.each([35, 70, 140])("fizzBuzzBazz2(%i) returns BuzzBazz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz2(input)).toBe("BuzzBazz")
})

test.each([105])("fizzBuzzBazz2(%i) returns FizzBuzzBazz", (input: number) => {
    expect(fizzBuzz.fizzBuzzBazz2(input)).toBe("FizzBuzzBazz")
})
