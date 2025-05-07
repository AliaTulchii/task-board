import { IUser } from "../../../users/types";
import { ITask } from "../../types";
import TaskCard from "../TaskCard/TaskCard";
import { useTasksSelector } from "../../TaskSlice";
import { ERROR_MESSEGE, LOADING } from "./TaskList.Constants";

interface TaskListProps {
  tasks: ITask[];
  users: IUser[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks, users }) => {
  const { isLoading, error } = useTasksSelector();

  if (isLoading) return <h1>{LOADING}</h1>;
  if (error) return <h1>{ERROR_MESSEGE}</h1>;

  return (
    <ul>
      {tasks?.map((todo: ITask) => {
        const user = users?.find((u: IUser) => u.id === todo.userId);

        return (
          <TaskCard
            user={user}
            todo={todo}
            key={todo.title}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
