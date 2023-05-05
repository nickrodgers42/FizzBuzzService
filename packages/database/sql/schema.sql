CREATE DATABASE fizzbuzz;

\c fizzbuzz

CREATE TABLE users(
    user_id serial PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL
);
