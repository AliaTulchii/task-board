import React from "react";
import { COMPLETED, CREATED, OPEN } from "../Task.Constants";

interface TaskCardProps {
  todo: {
    id: number,
    title: string,
    completed: boolean,
  },
  user?: {
    name: string,
  },
}

const TaskCard:React.FC<TaskCardProps> = ({todo, user}) => {

  return (
          <div key={todo.id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
            <h2>{todo.title}</h2>
            <p>{CREATED} {user ? user.name : "Unknown user"}</p>
            <p>{COMPLETED} {todo.completed ? "Yes" : "No"}</p>
            <button>{OPEN}</button>
          </div>
  );
};

export default TaskCard;