CREATE DATABASE nodedbcrud;

use nodedbcrud;

CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMET PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

show tables;

describe customer;