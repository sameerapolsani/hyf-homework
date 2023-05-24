select * from user;
select * from task;
select * from status;
select * from user_task;
-- Get all the tasks assigned to users whose email ends in @spotify.com
select task.title,user.email,task.id 
from task 
inner join user_task 
on task.id = user_task.task_id
inner join user 
on user.id = user_task.user_id
where email like '%@spotify.com';
-- Get all the tasks for 'Donald Duck' with status 'Not started'
select task.title,user.name,status.name 
from task
inner join user_task 
on task.id = user_task.task_id
inner join user 
on user.id = user_task.user_id
inner join status
on status.id = task.status_id
where user.name = 'Donald Duck'
and status.name = 'Not started';
-- Get all the tasks for 'Maryrose Meadows' that were created in september 
-- (hint: month(created)=month_number)
SELECT 	user.name, task.title, task.created 
FROM user_task
INNER JOIN task ON task.id = user_task.task_id
INNER JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows' 
AND MONTH(created) = 09;
-- Find how many tasks where created in each month,
select month(created) as 'month created', count(*) as 'tasks'
from task
group by month(created);



