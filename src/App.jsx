import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./contexts/TaskContext";

function App() {
  return (
    <div className="p-5">
      <h2 className="text-5xl">To Do</h2>
      <TaskProvider>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default App;
