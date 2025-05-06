import axios from "axios";
import { IUser } from "../../../features/users/types";
import { ITask } from "../../../features/tasks/types";

export const getUsersResponse = () => axios.get<IUser[]>(
  "https://jsonplaceholder.typicode.com/users"
);

export const getTasksResponse = () => axios.get<ITask[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );

export const USERS_FETCH_ALL = "users/fetchAll"
export const TASKS_FETCH_ALL = "tasks/fetchAll";
export const UNKNOWN_ERROR = "Unknown error";
