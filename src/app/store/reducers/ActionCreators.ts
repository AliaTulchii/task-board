import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  TASK_CREATE_API,
  TASKS_FETCH_ALL_API,
  UNKNOWN_ERROR_MESSAGE_API,
  USERS_FETCH_ALL_API,
} from "./Action.Constants";
import { getTasksResponse, getUsersResponse, putTaskResponse } from "./api";
import { CreateTaskPayload } from "./types";

export const fetchUsers = createAsyncThunk(
  USERS_FETCH_ALL_API,
  async (_, thunkAPI) => {
    try {
      const response = await getUsersResponse();
      return response.data;
    } catch (error) {
      let message = UNKNOWN_ERROR_MESSAGE_API;
      if (error instanceof Error) {
        message = error.message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchTasks = createAsyncThunk(
  TASKS_FETCH_ALL_API,
  async (_, thunkAPI) => {
    try {
      const response = await getTasksResponse();
      return response.data;
    } catch (error) {
      let message = UNKNOWN_ERROR_MESSAGE_API;
      if (error instanceof Error) {
        message = error.message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);



export const createTask = createAsyncThunk(
  TASK_CREATE_API,
  async (newTask: CreateTaskPayload, thunkAPI) => {
    try {
      const response = await putTaskResponse(newTask);
      return response.data;
    } catch (error) {
      let message = UNKNOWN_ERROR_MESSAGE_API;
      if (error instanceof Error) {
        message = error.message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);