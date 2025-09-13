import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./constant/data";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    let id = data.reduce((prev, current) =>
      prev?.id > current.id ? prev.id : current.id
    );

    return id + 1;
  };

  const handleAddTask = (text) => {
    const newTask = { id: getNextId(tasks), text: text, done: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleUpdateTask = (taskId, updatedText) => {
    const nextTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, text: updatedText } : t
    );

    setTasks(nextTasks);
  };

  const handleDeleteTask = (id) => {
    const nextTasks = tasks.filter((task) => task.id !== id);
    setTasks(nextTasks);
  };

  const handleToggleDone = (id) => {
    const nextTasks = tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );

    setTasks(nextTasks);
  };

  return (
    <div className="p-5">
      <h2 className="text-5xl">To Do</h2>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
        onToggleDone={handleToggleDone}
      />
    </div>
  );
}

export default App;
