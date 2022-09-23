import { useContext } from "react";
import { TaskContext } from "../../context/task.context";
import { ITask } from "../../data/ITask";

type PropsType = {
  task: ITask;
};

export function TaskCard({ task }: PropsType) {
  const { deleteTask } = useContext(TaskContext);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="bg-gray-700 text-white p-4 rounded-md capitalize">
      <h1 className="text-xl font-bold">{task.title}</h1>
      <p className="text-gray-400 text-sm">{task.description}</p>
      <button
        className="bg-red-400 px-2 py-1 rounded-md mt-4 hover:bg-red-300"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
