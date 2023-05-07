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
    list: ListUsers
}

@readonly
@http(method: "GET", "uri": "/users/get/{userName}", code: 200)
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
structure GetUserOutput {
    @required
    response: String
}

@idempotent
@http(method: "PUT", "uri": "/users/add/{userName}", code: 201)
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
@http(method: "DELETE", "uri": "/users/delete", code: 200)
operation DeleteUser {
    input: DeleteUserInput
    output: DeleteUserOutput
    errors: [ValidationException]
}

@input
structure DeleteUserInput {
    @required
    @httpQuery("username")
    userName: String
}

@output
structure DeleteUserOutput {
    @required
    response: String
}

@readonly
@paginated(
    inputToken: "nextToken"
    outputToken: "nextToken"
    pageSize: "pageSize"
)
@http(method: "GET", "uri": "/users/list", code: 200)
operation ListUsers {
    input: ListUsersInput
    output: ListUsersOutput
    errors: [ValidationException]
}

@input
structure ListUsersInput {
    @httpQuery("token")
    nextToken: String
    @httpQuery("count")
    pageSize: Integer
}

@output
structure ListUsersOutput {
    nextToken: String
    @required
    response: UserList
}

list UserList {
    member: String
}

