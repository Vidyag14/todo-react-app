import { useState } from "react";
import "./App.css";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {

    if(task.trim() === ""){
  alert("Please enter a task");
  return;
}

    if(task.trim() === "") return;

    setTasks([...tasks, task]);

    setTask("");
  };

  // Delete Task
  const deleteTask = (index) => {

    const updatedTasks = tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);
  };

  return (
    <div className="container">

      <h1>Todo App ✅⌛</h1>

      <div className="input-box">

        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>
          Add
        </button>


      </div>

      <ul>

        {
          tasks.map((item, index) => (

            <li key={index}>
              <span>{item}</span>

              <button onClick={() => deleteTask(index)}>
              Delete
              </button>
            </li>

            
          ))
        }

      </ul>


<h3>Total Tasks: {tasks.length}</h3>
    </div>
  );
}

export default App;