import { useState } from "react";
import { useDispatch } from "../contexts/TaskContext";

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.text);
  const dispatch = useDispatch();
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
            dispatch({
              type: "UPDATE",
              id: task.id,
              text: updatedTask,
            });
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
        <button
          onClick={() =>
            dispatch({
              type: "DELETE",
              id: task.id,
            })
          }
          className="button"
        >
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
        onChange={() =>
          dispatch({
            type: "TOGGLE_DONE",
            id: task.id,
          })
        }
      />

      {renderTask}
    </li>
  );
}
export default Task;
