// features/pagination/paginationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks/redux";
interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  itemsPerPage: 5,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
export const usePaginationSelector = () =>
  useAppSelector((state) => state.pagination);
