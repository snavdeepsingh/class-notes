/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE moviePlannerDB;
USE moviePlannerDB;

-- Create the table plans.
CREATE TABLE  movies
(
id int NOT NULL AUTO_INCREMENT,
movies varchar(255) NOT NULL,
PRIMARY KEY (id)
);

