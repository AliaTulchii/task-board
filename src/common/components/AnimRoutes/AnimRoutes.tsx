import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import UserList from "../../../pages/UserList";
import TaskDetails from "../../../pages/TaskDetails";
import { CompletedFilter } from "../../types";

interface AnimRoutesProps {
  completedFilter: CompletedFilter;
  usernameFilter: string;
}

const AnimRoutes: React.FC<AnimRoutesProps> = ({completedFilter, usernameFilter}) => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Dashboard completedFilter={completedFilter} usernameFilter={usernameFilter}/>} />
      <Route path="/users" element={<UserList completedFilter={completedFilter} usernameFilter={usernameFilter}/>} />
      <Route path="/task/:id" element={<TaskDetails />} />
    </Routes>
  );
};

export default AnimRoutes;
