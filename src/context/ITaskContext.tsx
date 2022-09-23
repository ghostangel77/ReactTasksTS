import { ITask } from "../data/ITask";

export interface ITaskContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  deleteTask: (taskId: number) => void;
}
