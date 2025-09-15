import { useState } from "react";
import { useDispatch } from "../contexts/TaskContext";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

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
