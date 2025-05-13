import { RootState } from "../../app/store/store";


export const selectCurrentPage = (state: RootState) => state.pagination.currentPage;
export const selectItemsPerPage = (state: RootState) => state.pagination.itemsPerPage;