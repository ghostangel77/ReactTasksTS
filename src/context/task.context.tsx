import React, { createContext, ReactChildren, useState } from "react";
import { tasks as data } from "../data/tasks";
import { ITask } from "../data/ITask";
import { ITaskContext } from "./ITaskContext";

export const TaskContext = createContext<ITaskContext>({
  tasks: [],
  addTask: (task) => {},
  deleteTask: (taskId) => {},
});

type PropsType = {
  children?: React.ReactNode;
};

export function TaskContextProvider(props: PropsType) {
  const [tasks, setTasks] = useState(data);
  const [lastId, setLastId] = useState(tasks.length);

  const addTask = (task: ITask) => {
    task.id = lastId + 1;
    setLastId(task.id);
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
