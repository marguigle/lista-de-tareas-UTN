import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      addTask(userInput);
      setUserInput("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleChange} />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
