$version: "2"

namespace example.fizzBuzz

use smithy.framework#ValidationException

resource User {
    identifiers: {
        userName: String
    }
    read: GetUser
    put: AddUser
    delete: DeleteUser
}

@readonly
@http(method: "GET", "uri": "/user/{userName}", code: 200)
operation GetUser {
    input: GetUserInput
    output: GetUserOutput
    errors: [ValidationException]
}

@input
structure GetUserInput {
    @required
    @httpLabel
    userName: String
}

@output
structure GetUserOutput {}

@idempotent
@http(method: "PUT", "uri": "/user/addUser/{userName}", code: 201)
operation AddUser {
    input: AddUserInput
    output: AddUserOutput
    errors: [ValidationException]
}

@input
structure AddUserInput {
    @required
    @httpLabel
    userName: String
}

@output
structure AddUserOutput {
    @required
    response: String
}

@idempotent
@http(method: "DELETE", "uri": "/user/{userName}", code: 200)
operation DeleteUser {
    input: DeleteUserInput
    output: DeleteUserOutput
    errors: [ValidationException]
}

@input
structure DeleteUserInput {
    @required
    @httpLabel
    userName: String
}

@output
structure DeleteUserOutput {}
