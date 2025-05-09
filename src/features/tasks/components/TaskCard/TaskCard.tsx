import React from "react";
import { COMPLETED, CREATED, OPEN } from "../Task.Constants";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

interface TaskCardProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  user?: {
    name: string;
  };
}

const TaskCard: React.FC<TaskCardProps> = ({ todo, user }) => {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate(`/task/${todo.id}`, {
      state: { todo, user },
    });
  };
  return (
    <Card sx={{ marginBottom: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {todo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {CREATED}: {user ? user.name : "Unknown user"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {COMPLETED}: {todo.completed ? "Yes" : "No"}
        </Typography>
        <Box textAlign="right">
          <Button variant="contained" onClick={handleOpen}>
            {OPEN}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
