import { useImmerReducer } from "use-immer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./constant/data";
import { TasksContext, TasksDispatchContext } from "./contexts/TaskContext.jss";
import todoReducer from "./reducers/todoReducer";

function App() {
  const [tasks, dispatch] = useImmerReducer(todoReducer, initialTasks);

  return (
    <div className="p-5">
      <h2 className="text-5xl">To Do</h2>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext value={dispatch}>
          <AddTask />
          <TaskList />
        </TasksDispatchContext>
      </TasksContext.Provider>
    </div>
  );
}

export default App;
