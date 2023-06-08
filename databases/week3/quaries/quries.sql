-- MEAL
-- Get all meals
select
   meal.id AS 'Meal Id',
   meal.title AS 'Meals' 
from
   meal;
-- Get all reservations
select
   * 
from
   reservation;
-- Get all reviews
select
   * 
from
   review;
-- Get a meal with any id, fx 1
select
   * 
from
   meal 
where
   id = 1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Updated description for meal with id 1
update
   meal 
set
   description = replace(description, 'veg salad paner', 'indian veg meal') 
where
   id = 1;
-- Delete a meal with any id, fx 1
-- Deleted a task with id = 3 
delete
from
   meal 
where
   id = 6;
-- Get a reservation with any id, fx 1
select
   * 
from
   reservation 
where
   id = 1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Updating number_of_guests for Reservation id = 2 from 2 to 4;
update
   reservation 
set
   number_of_guests = replace(number_of_guests, 2, 4) 
where
   id = 2;
-- Delete a reservation with any id, fx 1
delete
from
   reservation 
where
   id = 4;
-- Get a review with any id, fx 1
select
   * 
from
   review 
where
   id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update
   review 
set
   title = replace(title, 'Excellent Sea Food', 'Excellent Fresh Fish Food') 
where
   id = 1;
-- Delete a review with any id, fx 1
delete
from
   review 
where
   id = 2;