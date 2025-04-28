import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./ActionCreators";

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
      // Якщо action.payload є — беремо його, інакше беремо стандартне повідомлення з error.message
      state.error = action.payload as string || action.error.message || "Unknown error";
     });
 },
});

export default userSlice.reducer;
