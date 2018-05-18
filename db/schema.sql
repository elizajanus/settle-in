CREATE DATABASE settle_in;

USE DATABASE settle_in;

CREATE TABLE roommates
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(150) NOT NULL,
    email varchar(150) NOT NULL,
    age INTEGER(3) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    gender VARCHAR(150) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE survey
(
	id int NOT NULL AUTO_INCREMENT,
	smoking BOOLEAN NOT NULL,
    pets BOOLEAN NOT NULL,
    ground BOOLEAN NOT NULL,
    nightowl BOOLEAN NOT NULL,
    clean BOOLEAN NOT NULL,
    entertainer BOOLEAN NOT NULL,
    religious BOOLEAN NOT NULL,
    samegender BOOLEAN NOT NULL,
    allergies VARCHAR(200),
    relationship BOOLEAN NOT NULL,
    roommaterelationship BOOLEAN NOT NULL,
    groceries BOOLEAN NOT NULL,
    bathroom BOOLEAN NOT NULL,
    cooking BOOLEAN NOT NULL,
    pricerange VARCHAR(200),
    veg BOOLEAN NOT NULL,
    personality VARCHAR(100),
    kids BOOLEAN NOT NULL,
    freetime VARCHAR(100),
    wfh BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);