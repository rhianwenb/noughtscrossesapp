--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE IF EXISTS asana;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT, 
    username VARCHAR(60) NOT NULL, 
    password VARCHAR(60), 
    score VARCHAR(100),
    PRIMARY KEY (id)
);
