import { getNextId } from "../utils/get_next_id";

export default function todoReducer(draft, actions) {
  switch (actions.type) {
    case "CREATE": {
      const newTask = { id: getNextId(draft), text: actions.text, done: false };
      draft.push(newTask);
      break;
    }
    case "UPDATE": {
      const index = draft.findIndex((task) => task.id === actions.id);
      draft[index] = { ...draft[index], text: actions.text };
      break;
    }

    case "DELETE": {
      return draft.filter((task) => task.id !== actions.id);
    }
    case "TOGGLE_DONE": {
      const index = draft.findIndex((task) => task.id === actions.id);
      draft[index] = { ...draft[index], done: !draft[index].done };
      break;
    }
    default:
      throw Error(`Unknown action: ${actions.type}`);
  }
}
