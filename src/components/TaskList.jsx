import TaskItem from "./TaskItem.jsx";

const TaskList = ({ tasks, onCompleted, onDeleteItem }) => {
  return (
    <div>
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
