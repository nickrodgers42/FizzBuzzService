$version: "2"
namespace example.fizzBuzz

use aws.protocols#restJson1
use smithy.framework#ValidationException

@restJson1
service FizzBuzz {
    version: "2023-03-04"
    operations: [Ping]
}

@readonly
@http(method: "GET", "uri": "/ping", code: 200)
operation Ping {
    input: PingInput
    output: PingOutput
    errors: [ValidationException]
}

@input
structure PingInput {}

@output
structure PingOutput {
    @required
    message: String
}
