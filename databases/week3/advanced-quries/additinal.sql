-- ADDITIONAL QUERIES
-- Get meals that has a price smaller than a specific price fx 90
select
   meal.id,
   meal.title,
   meal.price 
from
   meal 
where
   meal.price < 200;
-- Get meals that still has available reservations
select
   meal.*,
   sum(reservation.number_of_guests) AS Total_reserved_yet 
from
   meal 
   inner join
      reservation 
      on meal.id = reservation.meal_id 
group by
   reservation.meal_id 
having
   meal.max_reservations > Total_reserved_yet;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select
   meal.id,
   meal.title 
from
   meal 
where
   title like '%Indian%';
-- Get meals that has been created between two dates
select
   * 
from
   meal 
where
   created_date between '2023-06-10' and '2023-06-12';
-- Get only specific number of meals fx return only 5 meals
select
   * 
from
   meal limit 5;
-- Get the meals that have good reviews
select
   meal.id,
   meal.title,
   review.title,
   review.description,
   review.stars 
from
   meal 
   inner join
      review 
      on meal.id = review.meal_id 
where
   review.stars >= 3;
-- Get reservations for a specific meal sorted by created_date
select
   meal.id,
   meal.title,
   reservation.id,
   reservation.number_of_guests,
   reservation.created_date 
from
   reservation 
   inner join
      meal 
      on reservation.meal_id = meal.id 
where
   meal.id = 2 
order by
   reservation.created_date ASC;
-- Sort all meals by average number of stars in the reviews
select
   meal.title,
   ROUND( avg(review.stars), 1 ) AS 'Average Rating' 
from
   meal 
   inner join
      review 
      on meal.id = review.meal_id 
group by
   review.meal_id 
order by
   avg (review.stars) DESC;