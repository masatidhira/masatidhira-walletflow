CREATE DATABASE walletflowapp;

CREATE TABLE transactions (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    transaction_type VARCHAR(32),
    title VARCHAR(32),
    nominal INT,
    date VARCHAR(255)
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255),
    hashed_password VARCHAR(255)
);

INSERT INTO transactions(id, user_email, transaction_type, title, nominal, date) VALUES('0', 'masatidhira@test.com', 'income', 'Uang saku dari Ibu', 50000, '05 Aug 2024 01:25:10');