import { useContext, useState } from "react";
import { TaskContext } from "../../context/task.context";
import { ITask } from "../../data/ITask";

export function TaskForm() {
  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const task: ITask = {
      id: 0,
      title,
      description,
    };
    addTask(task);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto bg-slate-600 rounded-b-xl">
      <form onSubmit={handleSubmit} className="p-10 mb-6">
        <h1 className="text-2xl font-bold capitalize mb-3 text-white">
          Create task
        </h1>
        <input
          required
          autoFocus
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 w-full mb-2"
        />
        <textarea
          required
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 w-full mb-2 border-2"
        />
        <button className="bg-indigo-400 px-3 py-1 text-white hover:bg-indigo-300">
          Save
        </button>
      </form>
    </div>
  );
}
