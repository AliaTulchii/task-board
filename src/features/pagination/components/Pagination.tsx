// Dashboard/Pagination.tsx
import { Pagination as MuiPagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCurrentPage, usePaginationSelector } from "../paginationSlice";

interface PaginationProps {
  totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems }) => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = usePaginationSelector();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setCurrentPage(page));
  };

  if (totalPages <= 1) return null;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default Pagination;
