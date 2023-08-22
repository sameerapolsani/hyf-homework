import React from "react";
import { todolist } from "./todolist";

const Tasklist = (props) => {
  return (
    <ul>
      <li>{props.id}</li>
      <li>{props.task}</li>
      <li>{props.due_date}</li>
      <li>{props.completed}</li>
    </ul>
  );
};
function Task() {
  return todolist.map((list) => {
    return (
      <Tasklist
        task={list.task}
        due_date={list.due_date}
        completed={list.completed}
        id={list.id}
      />
    );
  });
}
export default Task;
