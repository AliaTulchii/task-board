import axios from "axios";
import { IUser } from "../../../features/users/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITask } from "../../../features/tasks/types";


export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      let message = "Unknown error";
      if (error instanceof Error) {
        message = error.message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const fetchTasks = createAsyncThunk(
  "task/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ITask[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data;
    } catch (error) {
      let message = "Unknown error";
      if (error instanceof Error) {
        message = error.message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);
