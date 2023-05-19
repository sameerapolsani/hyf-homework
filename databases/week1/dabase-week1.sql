/*Select the names and phones of all users;*/
SELECT name,
       phone
FROM USER;

/*Select the name of the user with id=10;*/
SELECT *
FROM USER
WHERE id = 10;


SELECT name
FROM USER
WHERE id =10;

/*Find how many users exist in the database;*/
SELECT count(id)
FROM USER;

/*Select the names of the first 5 users in the database;*/
SELECT name
FROM USER
WHERE id<=5;

/*Select the names of the last 3 users in the database;*/
SELECT name
FROM USER
ORDER BY id DESC
LIMIT 3;

/*Sum all the ids in the user table;*/
SELECT sum(id)
FROM USER;

/*Select all users and order them alphabetically by name;*/
SELECT *
FROM USER
ORDER BY name;

/*Find all tasks that include SQL either on the title or on the description;*/
SELECT *
FROM TASK
WHERE title LIKE '%SQL%'
  OR description LIKE '%SQL%';
  -- Find out how many tasks are in the task table

SELECT count(id)
FROM task ;

-- Find out how many tasks in the task table do not have a valid due date

SELECT count(id)
FROM task
WHERE IsNull(due_date);

/* Find all the tasks that are marked as done */ /*SELECT *
FROM task
WHERE status_id = 3;*/
SELECT *
FROM task
JOIN status ON task.status_id = status.id
WHERE status.name = "done";

/* Find all the tasks that are not marked as done */ /*SELECT *
FROM task
WHERE status_id !=3;*/
SELECT *
FROM task
JOIN status ON task.status_id = status.id
WHERE status.name != "done";

-- Get all the tasks, sorted with the most recently created first

SELECT title
FROM task
ORDER BY created DESC;

-- Get the single most recently created task

SELECT title
FROM task
ORDER BY created DESC
LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains database

SELECT title,
       due_date
FROM task
WHERE title LIKE "%database%"
  OR description LIKE "%database%";

-- Get the title and status (as text) of all tasks

SELECT task.title,
       status.name AS status
FROM task
INNER JOIN status ON task.status_id = status.id;

-- Get the name of each status, along with a count of how many tasks have that status

SELECT status.name AS status,
       COUNT(*) AS total
FROM status
INNER JOIN task ON task.status_id = status.id
GROUP BY status.name;

-- Get the names of all statuses, sorted by the status with most tasks first

SELECT status.name AS status,
       COUNT(*) AS total
FROM status
INNER JOIN task ON task.status_id = status.id
GROUP BY status.name
ORDER BY total DESC;

