import { useState } from "react";

function Task({ task, onUpdate, onDelete, onToggleDone }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.text);

  let renderTask;

  if (isEditing) {
    renderTask = (
      <>
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
          className="input"
        />
        <button
          onClick={() => {
            onUpdate(task.id, updatedTask);
            setIsEditing(false);
          }}
          className="button"
        >
          Save
        </button>
      </>
    );
  } else {
    renderTask = (
      <>
        <p>{task.text}</p>
        <button onClick={() => setIsEditing(true)} className="button">
          Edit
        </button>
        <button onClick={() => onDelete(task.id)} className="button">
          Delete
        </button>
      </>
    );
  }

  return (
    <li className="flex space-x-2 items-center">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggleDone(task.id)}
      />

      {renderTask}
    </li>
  );
}
export default Task;
