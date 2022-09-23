import { useContext } from "react";
import { TaskContext } from "../../context/task.context";
import { TaskCard } from "../taskCard/taskCard.component";

export function Tasks() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-4xl font-bold text-center text-white">No Tasks</h1>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((t) => (
        <TaskCard key={t.id} task={t} />
      ))}
    </div>
  );
}
