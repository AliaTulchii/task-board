import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import UserList from "../../../pages/UserList";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/policy" element={<UserList />} />
      </Routes>
    </div>
  );
};

export default AnimRoutes;
