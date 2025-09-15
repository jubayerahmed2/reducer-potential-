import { useContext } from "react";
import { TasksContext } from "../contexts/TaskContext";
import Task from "./Task";

function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <div className="space-y-3 mt-3">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
export default TaskList;
