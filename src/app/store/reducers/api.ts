import axios from "axios";
import { IUser } from "../../../features/users/types";
import { ITask } from "../../../features/tasks/types";
import { BASE_API } from "./Action.Constants";
import { CreateTaskPayload } from "./types";

export const getUsersResponse = () => axios.get<IUser[]>(`${BASE_API}/users`);

export const getTasksResponse = () => axios.get<ITask[]>(`${BASE_API}/todos`);

export const putTaskResponse = (newTask: CreateTaskPayload) =>
  axios.post<ITask>(`${BASE_API}/todos`, newTask);
