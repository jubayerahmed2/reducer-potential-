import { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");
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
          onAdd(text);
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
