import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTasks } from "../../app/store/reducers/ActionCreators";
import { ITask } from "./types";
import { useAppSelector } from "../../app/hooks/redux";

interface TaskState {
  tasks: ITask[];
  isLoading: boolean;
  error: string;
}

const initialState: TaskState = {
  tasks: [],
  isLoading: false,
  error: "",
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   builder
     .addCase(fetchTasks.pending, (state) => {
       state.isLoading = true;
     })
     .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<ITask[]>) => {
       state.isLoading = false;
       state.error = "";
       state.tasks = action.payload;
     })
     .addCase(fetchTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string || action.error.message || "Unknown error";
     });
 },
});

export default taskSlice.reducer;
export const useTasksSelector = () => useAppSelector((state) => state.tasks);