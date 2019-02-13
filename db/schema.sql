DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger VARCHAR(255) NOT NULL,
  eaten BOOLEAN DEFAULT false
);

INSERT INTO burgers(burger)
VALUES
  ("Cheese Burger"),
  ("Bacon Burger"),
  ("A Third Burger");