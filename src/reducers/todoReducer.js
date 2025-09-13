export default function todoReducer(tasks, actions) {
  switch (actions.type) {
    case "create":
      return [...tasks, { id: actions.id, text: actions.text, done: false }];

    case "update":
      return tasks.map((t) =>
        t.id === actions.id ? { ...t, text: actions.text } : t
      );

    case "delete":
      return tasks.filter((task) => task.id !== actions.id);

    case "toggleDone":
      return tasks.map((t) =>
        t.id === actions.id ? { ...t, done: !t.done } : t
      );

    default:
      throw Error(`Unknown action: ${actions.type}`);
  }
}
