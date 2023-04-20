$version: "2"
namespace example.fizzBuzz

use aws.protocols#restJson1
use smithy.framework#ValidationException
use aws.api#service

@restJson1
service FizzBuzz {
    version: "2023-03-04"
    operations: [
        GetFizzBuzz,
        AddUser,
        Ping
    ]
}

@readonly
@http(method: "GET", "uri": "/ping", code: 200)
operation Ping {
    input: PingInput
    output: PingOutput
    errors: [ ValidationException ]
}

@input
structure PingInput {}

@output
structure PingOutput {
    @required
    message: String
}

@readonly
@http(method: "GET", "uri": "/getFizzBuzz", code: 200)
operation GetFizzBuzz {
    input: GetFizzBuzzInput
    output: GetFizzBuzzOutput
    errors: [ ValidationException ]
}

@input
structure GetFizzBuzzInput {}

@output
structure GetFizzBuzzOutput {
    fizzBuzzString: String
}

@http(method: "POST", "uri": "/addUser", code: 201)
operation  AddUser {
    input: AddUserInput,
    output: AddUserOutput,
    errors: [ ValidationException ]
}

@input
structure AddUserInput {
    @required
    name: String
}

@output
structure AddUserOutput {
    @required
    response: String
}

