import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import UserList from "../../../pages/UserList";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
};

export default AnimRoutes;
