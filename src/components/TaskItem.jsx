const TaskItem = ({ tarea, onCompleted, onDeleteItem }) => {
  const getStyle = () => {
    return {
      textDecoration: tarea.completed ? "line-through" : "none",
      margin: "20px",
      border: "2px solid coral",
      backgrowndColor: "#CCF7E3",
    };
  };

  return (
    <div style={getStyle()}>
      <input
        type="checkbox"
        checked={tarea.Completed}
        onChange={() => onCompleted(tarea.id)}
      />
      {tarea.task}
      <button onClick={() => onDeleteItem(tarea.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
