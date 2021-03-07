CREATE DATABASE firstApi;
-- \l

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES ('Joe', 'joe@mail.com'), ('Joe', 'joe@mail.com');