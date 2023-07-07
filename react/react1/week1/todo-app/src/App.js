import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task"; // Import the Task component
import ToDoForm from "./components/ToDoForm"; // Import the ToDoForm component

function App() {
  return (
    <div className="App">
      <Header className="heading" />
      <div className="task">
        <Task className="todolist" />
      </div>
      <div className="form">
        <ToDoForm className="ToDoForm" />
      </div>
    </div>
  );
}

export default App;
