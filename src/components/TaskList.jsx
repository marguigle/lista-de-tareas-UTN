import TaskItem from "./TaskItem.jsx";
import "../styles/taskList.css";
const TaskList = ({ tasks, onCompleted, onDeleteItem }) => {
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
export default TaskList;
