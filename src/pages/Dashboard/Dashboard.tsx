import TaskList from "../../features/tasks/components/TaskList/TaskList";
import "./Dashboard.css";
import { useEffect,  useMemo } from "react";
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

interface DashboardProps {
  completedFilter: CompletedFilter;
  usernameFilter: string;
}

const Dashboard:React.FC<DashboardProps> = ({completedFilter, usernameFilter}) => {
  const dispatch = useAppDispatch();
  const { users } = useUsersSelector();
  const { tasks } = useTasksSelector();



  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchTasks());
  }, []);

  const filteredTasks = useMemo(
    () => filterTasks({ users, tasks, completedFilter, usernameFilter }),
    [users, tasks, completedFilter, usernameFilter])


  if (!users.length || !tasks.length) {
    return <h1>{LOADING}</h1>;
  }

  

  return (
    <main className="dashboard">
      
      <TaskList tasks={filteredTasks} users={users} />
    </main>
  );
};

export default Dashboard;
