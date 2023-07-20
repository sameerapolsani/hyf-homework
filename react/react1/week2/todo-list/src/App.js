import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";

import TodoList from "./components/TodoList";
import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState([
    {
      id: 1,
      description: "Get out of bed",
    },
    {
      id: 2,
      description: "Brush teeth",
    },
    {
      id: 3,
      description: "Eat breakfast",
    },
  ]);

  function deleteToDo(toDoId) {
    setToDo(toDo.filter((toDo) => toDo.id !== toDoId));
  }

  function handleAddToDo(description) {
    const newToDo = {
      id: toDo.length + 1,
      description,
    };
    setToDo([...toDo, newToDo]);
  }

  return (
    <div className="App">
      <Header toDo={toDo} />
      <AddTodo handleAddToDo={handleAddToDo} />

      <TodoList toDo={toDo} deleteToDo={deleteToDo} />
      <Timer />
    </div>
  );
}
export default App;
