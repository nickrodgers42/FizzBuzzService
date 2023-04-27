$version: "2"
namespace example.fizzBuzz

resource User {
    identifiers: {
        userName: String,
    }
    read: GetUser
    create: AddUser
    delete: DeleteUser
}

@readonly
@http(method: "GET", "uri": "/user/{userName}", code: 200)
operation GetUser {
    input: GetUserInput
    output: GetUserOutput
}

@input
structure GetUserInput {
    @required
    @httpLabel
    userName: String
}

@output
structure GetUserOutput {
}

@idempotent
@http(method: "DELETE", "uri": "/user/{userName}", code: 200)
operation DeleteUser {
    input: DeleteUserInput
    output: DeleteUserOutput
}

@input
structure DeleteUserInput {
    @required
    @httpLabel
    userName: String
}

@output
structure DeleteUserOutput {
}
