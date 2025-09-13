export default function todoReducer(draft, actions) {
  switch (actions.type) {
    case "create": {
      const newTask = { id: actions.id, text: actions.text, done: false };
      draft.push(newTask);
      break;
    }
    case "update": {
      const index = draft.findIndex((task) => task.id === actions.id);
      draft[index] = { ...draft[index], text: actions.text };
      break;
    }

    case "delete": {
      return draft.filter((task) => task.id !== actions.id);
    }
    case "toggleDone": {
      const index = draft.findIndex((task) => task.id === actions.id);
      draft[index] = { ...draft[index], done: !draft[index].done };
      break;
    }
    default:
      throw Error(`Unknown action: ${actions.type}`);
  }
}
