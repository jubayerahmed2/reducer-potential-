import { useTask } from "../contexts/TaskContext";
import Task from "./Task";

function TaskList() {
  const tasks = useTask();
  return (
    <div className="space-y-3 mt-3">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
export default TaskList;
