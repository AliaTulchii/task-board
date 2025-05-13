import TaskList from "../../features/tasks/components/TaskList/TaskList";
import "./Dashboard.css";
import { useEffect, useMemo } from "react";
import {
  fetchTasks,
  fetchUsers,
} from "../../app/store/reducers/ActionCreators";
import { useAppDispatch } from "../../app/hooks/redux";
import { useUsersSelector } from "../../features/users/UserSlice";
import { useTasksSelector } from "../../features/tasks/TaskSlice";
import { LOADING } from "../../features/users/components/User.Constants";
import { filterTasks } from "./utils/filterTasks";
import { CompletedFilter } from "../../common/types";
import { usePaginationSelector } from "../../features/pagination/PaginationSlice";
import Pagination from "../../features/pagination/components/Pagination";

interface DashboardProps {
  completedFilter: CompletedFilter;
  usernameFilter: string;
}

const Dashboard: React.FC<DashboardProps> = ({
  completedFilter,
  usernameFilter,
}) => {
  const dispatch = useAppDispatch();
  const { users } = useUsersSelector();
  const { tasks } = useTasksSelector();
  const { currentPage, itemsPerPage } = usePaginationSelector();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchTasks());
  }, []);

  const filteredTasks = useMemo(
    () => filterTasks({ users, tasks, completedFilter, usernameFilter }),
    [users, tasks, completedFilter, usernameFilter]
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTasks = filteredTasks.slice(startIndex, endIndex);

  if (!users.length || !tasks.length) {
    return <h1>{LOADING}</h1>;
  }

  return (
    <main className="dashboard">
      <TaskList tasks={paginatedTasks} users={users} />
      <Pagination totalItems={filteredTasks.length} /> 
    </main>
  );
};

export default Dashboard;
