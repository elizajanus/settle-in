CREATE DATABASE rentals_db; 

USE rentals_db;

CREATE TABLE rentals
(
    id INT NOT NULL AUTO_INCREMENT,
    street_number INT NOT NULL,
    street_name VARCHAR(255) NOT NULL,
    city_name VARCHAR(255) NOT NULL,
    state_name VARCHAR(255) NOT NULL,
    zipcode INT NOT NULL,
    price INT NOT NULL,
    beds INT NOT NULL,
    baths INT NOT NULL,
    sq_feet INT NOT NULL,
    pets BOOLEAN NOT NULL DEFAULT false,
    contact_name VARCHAR(255) NOT NULL,
    contact_number INT NOT NULL
    PRIMARY KEY(id)
)