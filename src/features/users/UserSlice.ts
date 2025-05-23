import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../../app/store/reducers/ActionCreators";
import { IUser } from "./types";
import { useAppSelector } from "../../app/hooks/redux";

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
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.isLoading = false;
          state.error = "";
          state.users = action.payload;
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          (action.payload as string) || action.error.message || "Unknown error";
      });
  },
});

export default userSlice.reducer;
export const useUsersSelector = () => useAppSelector((state) => state.users);
