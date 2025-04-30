import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../../app/store/redusers/ActionCreators";
import { IUser } from "./types";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   builder
     .addCase(fetchUsers.pending, (state) => {
       state.isLoading = true;
     })
     .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
       state.isLoading = false;
       state.error = "";
       state.users = action.payload;
     })
     .addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string || action.error.message || "Unknown error";
     });
 },
});

export default userSlice.reducer;
