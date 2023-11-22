import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const onCompleted = (id) => {
    setTasks(
      tasks.map((tarea) =>
        tarea.id === Number(id)
          ? { ...tarea, completed: !tarea.completed }
          : { ...tarea }
      )
    );
  };

  const onDeleteItem = (id) => {
    setTasks([...tasks].filter((tarea) => tarea.id !== id));
  };

  const addTask = (newTask) => {
    const newItem = { id: +new Date(), task: newTask, completed: false };

    setTasks([...tasks, newItem]);
  };
  return (
    <div className="containerApp">
      <h1>Lista de tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        onCompleted={onCompleted}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default App;
