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
    const {userId, completed} = task

    const mappedValue = COMPLETED_FILTER_MAPPER[completedFilter as CompletedFilter]
    const matchesCompleted = mappedValue === CompletedFilter.ALL || completed === mappedValue

    const user = users.find((user: IUser) => user.id === userId);

    const matchesUsername =
      !usernameFilter ||
      user?.name.toLowerCase().includes(usernameFilter.toLowerCase());

    return matchesCompleted && matchesUsername;
  });
}