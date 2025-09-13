import Task from "./Task";

function TaskList({ tasks, onUpdate, onDelete, onToggleDone }) {
  return (
    <div className="space-y-3 mt-3">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onToggleDone={onToggleDone}
        />
      ))}
    </div>
  );
}
export default TaskList;
