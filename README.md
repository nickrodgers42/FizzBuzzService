# FizzBuzz Service

Monorepo for a service that runs FizzBuzz

The repo consists of four packages:

* Model
* Server
* Client
* Database

This repo uses Smithy in the Model package to define the API between the Client
and the Server. Additionally, the Smithy package generates libraries that the
Client and Server consume to interact with each other.

## Quick Start

### Prerequisites

* [Docker](https://docs.docker.com/engine/install/)

Install all the yarn dependencies with

```
yarn install
```

Build all of the packages with

```
yarn build
```

Start the database with

```
yarn run:db
```

Start the server with

```
yarn run:server
```

Then the client package can be used to send commands to the server

```
yarn run:client -h
```
