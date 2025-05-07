import axios from "axios";
import { IUser } from "../../../features/users/types";
import { ITask } from "../../../features/tasks/types";

export const getUsersResponse = () =>
  axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");

export const getTasksResponse = () =>
  axios.get<ITask[]>("https://jsonplaceholder.typicode.com/todos");
