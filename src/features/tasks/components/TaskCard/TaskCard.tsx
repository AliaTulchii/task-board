import { taskApi } from "../../../../app/services/TasksService";
import { userApi } from "../../../../app/services/UserService";
import { IUser } from "../../../users/types";
import { ITask } from "../../types";

const TaskCard = () => {
  const { data: todos, error: tasksError, isLoading: tasksLoading } = taskApi.useFetchAllTasksQuery(5);
  const { data: users, error: usersError, isLoading: usersLoading } = userApi.useFetchAllUsersQuery(5);

  if (tasksLoading || usersLoading) return <h1>Loading...</h1>;
  if (tasksError || usersError) return <h1>Error loading data</h1>;

  return (
    <div>
      {todos?.map((todo:ITask) => {
        const user = users?.find((u:IUser) => u.id === todo.userId);

        return (
          <div key={todo.id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
            <h2>{todo.title}</h2>
            <p>Created by: {user ? user.name : "Unknown user"}</p>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
            <button>Open</button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskCard;