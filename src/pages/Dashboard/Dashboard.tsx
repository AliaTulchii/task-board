import Header from "../../common/components/Header/Header";
import TaskList from "../../features/tasks/components/TaskList/TaskList";
import "./Dashboard.css";
import { useEffect, useState, useMemo } from "react";
import {
  fetchTasks,
  fetchUsers,
} from "../../app/store/reducers/ActionCreators";
import { useAppDispatch } from "../../app/hooks/redux";
import { useUsersSelector } from "../../features/users/UserSlice";
import { useTasksSelector } from "../../features/tasks/TaskSlice";
import { LOADING } from "../../features/users/components/User.Constants";
import { CompletedFilter } from "../../common/types";
import { filterTasks } from "./utils/filterTasks";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { users } = useUsersSelector();
  const { tasks } = useTasksSelector();

  const [usernameFilter, setUsernameFilter] = useState("");
  // completed: 'yes'/'no', true/false
  const [completedFilter, setCompletedFilter] = useState<CompletedFilter>(CompletedFilter.ALL);

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
      <Header
        usernameFilter={usernameFilter}
        completedFilter={completedFilter}
        onUsernameChange={setUsernameFilter}
        onCompletedChange={setCompletedFilter}
      />
      <TaskList tasks={filteredTasks} users={users} />
    </main>
  );
};

export default Dashboard;
