import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  TASK_CREATE,
  TASKS_FETCH_ALL,
  UNKNOWN_ERROR,
  USERS_FETCH_ALL,
} from "./Action.Constants";
import { getTasksResponse, getUsersResponse, putTaskResponse } from "./api";
import { CreateTaskPayload } from "./types";

export const fetchUsers = createAsyncThunk(
  USERS_FETCH_ALL,
  async (_, thunkAPI) => {
    try {
      const response = await getUsersResponse();
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

export const fetchTasks = createAsyncThunk(
  TASKS_FETCH_ALL,
  async (_, thunkAPI) => {
    try {
      const response = await getTasksResponse();
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



export const createTask = createAsyncThunk(
  TASK_CREATE,
  async (newTask: CreateTaskPayload, thunkAPI) => {
    try {
      const response = await putTaskResponse(newTask);
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