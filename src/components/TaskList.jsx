import TaskItem from "./TaskItem.jsx";
import "../styles/taskList.css";
import PropTypes from "prop-types";

const TaskList = ({ tasks, onCompleted, onDeleteItem }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="containerList">
      {tasks.map((tarea, index) => (
        <TaskItem
          key={index}
          tarea={tarea}
          onCompleted={onCompleted}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onCompleted: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default TaskList;
