import { COMPLETED_FILTER_MAPPER } from "../../../common/constants/common.constants";
import { CompletedFilter } from "../../../common/types";
import { ITask } from "../../../features/tasks/types";
import { IUser } from "../../../features/users/types";

interface FilterTasksProps {
  tasks: ITask[]
  users: IUser[]
  completedFilter: CompletedFilter
  usernameFilter: string
}

export const filterTasks = ({ tasks, users, completedFilter, usernameFilter }: FilterTasksProps) => {
  return tasks.filter((task: ITask) => {
    const matchesCompleted = COMPLETED_FILTER_MAPPER[completedFilter as CompletedFilter]

    const user = users.find((user: IUser) => user.id === task.userId);

    const matchesUsername =
      !usernameFilter ||
      user?.name.toLowerCase().includes(usernameFilter.toLowerCase());

    return matchesCompleted && matchesUsername;
  });
}