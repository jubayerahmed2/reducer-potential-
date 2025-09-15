import { useContext, useState } from "react";
import { TasksDispatchContext } from "../contexts/TaskContext";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);

  return (
    <div>
      <input
        type="text"
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: "CREATE",
            text,
          });
          setText("");
        }}
        className="button"
      >
        Add Task
      </button>
    </div>
  );
}
export default AddTask;
