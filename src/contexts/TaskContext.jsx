import { createContext } from "react";
import { useImmerReducer } from "use-immer";
import { initialTasks } from "../constant/data";
import todoReducer from "../reducers/todoReducer";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(todoReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
