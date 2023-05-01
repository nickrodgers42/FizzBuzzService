$version: "2"
namespace example.fizzBuzz

use aws.protocols#restJson1
use smithy.framework#ValidationException
use aws.api#service

@service(sdkId: "FizzBuzz")
@restJson1
service FizzBuzz {
    version: "2023-03-04"
    resources: [User]
    operations: [
        GetFizzBuzz,
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
