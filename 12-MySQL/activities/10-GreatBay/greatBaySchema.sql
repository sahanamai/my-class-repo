DROP DATABASE IF EXISTS greatBay_DB;
CREATE DATABASE greatBay_DB;

USE greatBay_DB;

CREATE TABLE auctions(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid INT default 0,
  highest_bid INT default 0,
  PRIMARY KEY (id)
);


INSERT INTO auctions (item_name, category, starting_bid)
VALUES ("vase", "house", 100);

INSERT INTO auctions (item_name, category, starting_bid)
VALUES ("puzzle", "game", 20);