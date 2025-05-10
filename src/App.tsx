import { BrowserRouter as Router } from "react-router-dom";
import AnimRoutes from "./common/components/AnimRoutes/AnimRoutes";
import { useState } from "react";
import { CompletedFilter } from "./common/types";
import Header from "./common/components/Header/Header";

function App() {
    const [usernameFilter, setUsernameFilter] = useState("");
    const [completedFilter, setCompletedFilter] = useState<CompletedFilter>(CompletedFilter.ALL);
  return (
    <Router>
      <Header
              usernameFilter={usernameFilter}
              completedFilter={completedFilter}
              onUsernameChange={setUsernameFilter}
              onCompletedChange={setCompletedFilter}
            />
      <AnimRoutes completedFilter={completedFilter} usernameFilter={usernameFilter}/>
    </Router>
  );
}

export default App;
