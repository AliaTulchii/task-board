import { useLocation } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import { COMPLETED, CREATED } from "../features/tasks/components/Task.Constants";

const TaskDetails: React.FC = () => {
  const location = useLocation();
  const { todo, user } = location.state || {};

  if (!todo) {
    return <div>Task not found</div>;
  }

  return (
    <Card sx={{ marginBottom: 2, boxShadow: 3, borderRadius: 2, padding: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {todo.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {CREATED}: {user ? user.name : "Unknown user"}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          {COMPLETED}: {todo.completed ? "Yes" : "No"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskDetails;