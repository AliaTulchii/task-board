import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTasksResponse, getUsersResponse, TASKS_FETCH_ALL, UNKNOWN_ERROR, USERS_FETCH_ALL} from "./Action.Constants";


export const fetchUsers = createAsyncThunk(
  USERS_FETCH_ALL,
  async (_, thunkAPI) => {
    try {
      const response = await getUsersResponse();
      return response.data;
    } catch (error) {
      let message = UNKNOWN_ERROR
      if (error instanceof Error) {
        message = error.message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const fetchTasks = createAsyncThunk(
  TASKS_FETCH_ALL,
  async (_, thunkAPI) => {
    try {
      const response = await getTasksResponse()
      return response.data;
    } catch (error) {
      let message = UNKNOWN_ERROR;
      if (error instanceof Error) {
        message = error.message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);
