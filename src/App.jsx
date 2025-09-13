import { useImmerReducer } from "use-immer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./constant/data";
import todoReducer from "./reducers/todoReducer";

function App() {
  const [tasks, dispatch] = useImmerReducer(todoReducer, initialTasks);

  const getNextId = (data) => {
    let id = data.reduce((prev, current) =>
      prev?.id > current.id ? prev.id : current.id
    );

    return id + 1;
  };

  const handleAddTask = (text) => {
    dispatch({
      type: "create",
      id: getNextId(tasks),
      text,
    });
  };

  const handleUpdateTask = (taskId, updatedText) => {
    dispatch({
      type: "update",
      id: taskId,
      text: updatedText,
    });
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type: "delete",
      id,
    });
  };

  const handleToggleDone = (id) => {
    dispatch({
      type: "toggleDone",
      id,
    });
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
