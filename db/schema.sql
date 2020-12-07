DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(255) NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  devoured boolean,
  PRIMARY KEY(id)
);