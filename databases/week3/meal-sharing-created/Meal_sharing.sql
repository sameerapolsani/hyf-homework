-- Create a new database containing the following tables:
CREATE DATABASE IF NOT EXISTS `meal_sharing`;

USE `meal_sharing`;

-- table: Meal;
-- columns: id, title, description, location, when, max_reservations, price, created_date;
CREATE TABLE IF NOT EXISTS `meal` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL,
	`description` TEXT NULL DEFAULT NULL,
	`location` VARCHAR(255) NOT NULL,
	`when` DATETIME NOT NULL, 
	`max_reservations` INT(2) NOT NULL,
	`price` DECIMAL(5,2) NOT NULL,
	`created_date` DATE NOT NULL,  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

-- table: Review;
-- columns: id, title, description, meal_id (foreign key),starts, created_date;
CREATE TABLE IF NOT EXISTS `review` (
	`id` INT(10) unsigned NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL,
	`description` TEXT NULL DEFAULT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
	`stars` INT(2) NOT NULL,
	`created_date` DATE NOT NULL,
	PRIMARY KEY (`id`),
CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES meal (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- table: Reservation;
-- columns: id, number_of_guests, meal_id (foreign key), created_date, contact_phonenumber, contact_name, contact_email ;
CREATE TABLE IF NOT EXISTS `reservation` (
	`id` INT(10) unsigned NOT NULL,
	`number_of_guests` INT(2) UNSIGNED NOT NULL,
	`meal_id` INT(10) UNSIGNED NOT NULL,
	`created_date` DATE NOT NULL,
	`contact_phonenumber` VARCHAR(15) NOT NULL,
    `contact_name` VARCHAR(60) NOT NULL,
	`contact_email` VARCHAR(60) NOT NULL,
	PRIMARY KEY (`id`),
CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
USE `meal_sharing`;

-- MEAL
-- Get all meals
select meal.id AS 'Meal Id', meal.title AS 'Meals'
from meal;
-- Add a new meal
insert into meal (title, description, location, when, max_reservations, price, created_date) 
values (' Indian Menu', 'veg salad paner', 'Mumbai', '2023-06-15 19:00:00', 8, 170.00, '2023-05-06');

insert into meal (title, description, location, when, max_reservations, price, created_date) 
values ('Non Vegeterian Indian Menu', 'Chicken biryani', 'Kochi', '2023-06-20 19:30:00', 10, 170.00, '2023-06-10');
insert into meal (title, description, location, when, max_reservations, price, created_date) 
values ('Daminose', 'Pizza', 'copenhagen', '2023-06-22 18:30:00', 9, 120.00, '2023-06-11');
insert into meal (title, description, location, when, max_reservations, price, created_date) 
values ('Danish Meal', 'pastamed salat', 'alborg', '2023-06-24 18:30:00', 20, 250.00, '2023-06-14');
insert into meal (title, description, location, when, max_reservations, price, created_date) 
values ('burger Meal', 'vegaan burger', 'odense', '2023-06-24 18:00:00', 9, 190.00, '2023-06-14');
-- Deleted later using query
insert into meal (title, description, location, when, max_reservations, price, created_date) 
values ('kabab Meal', 'durum chiken', 'narrebro', '2023-06-20 18:00:00', 2, 90.00, '2023-06-16');
insert into meal (title, description, location, when, max_reservations, price, created_date) 
values ('italian meal','fdgfafha jggfgj', 'aarus', '2023-06-25 18:15:00', 15, 180.00, '2023-06-20');
-- RESERVATION
-- Get all reservations
select *
from reservation;
-- Add a new reservation
insert into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
values (1, 3, 2, '2023-06-12', 1234567, 'Jenny', 'jenny.j@gmail.com');
insert into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
values (2, 2, 1, '2023-01-13', 6542678, 'Kim', 'kim.fh@gmail.com');
insert into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
values (3, 1, 3, '2023-06-14', 23442157, 'Anu', 'anu.kd@gmail.com');
insert into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
values (4, 3, 2, '2023-06-15', 71686333, 'Mak', 'mkg@gmail.com');
insert into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
values (5, 4, 5, '2023-06-20', 16548935, 'sandi', 'sandig@gmail.com');
insert into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
values (6, 2, 5, '2023-06-20', 45671258, 'jan', 'jan@gmail.com');
-- REVIEW
-- Get all reviews
select *
from review;

-- Add a new review
insert into review (id, title, description, meal_id, stars, created_date) 
values (1, 'Excellent Sea Food','Enjoyed fish meal made from fresh river water fish', 3 , 5, '2023-06-24');

insert into review (id, title, description, meal_id, stars, created_date) 
values (2, 'Chicken Meal','yammy jusy chiken', 2 , 5, '2023-06-22');
insert into review (id, title, description, meal_id, stars, created_date) 
values (3, 'Not recommended','taste not good', 5 , 1, '2023-06-25');
insert into review (id, title, description, meal_id, stars, created_date) 
values (4, 'Fish Food','nice taste', 3 , 3, '2023-06-25');
insert into review (id, title, description, meal_id, stars, created_date) 
values (5, 'Juicy Chicken','little bit spicy', 2 , 4, '2023-06-25');
