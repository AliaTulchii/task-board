import React, { useMemo } from "react";
import UserItem from "../features/users/components/UserItem/UserItem";
import { useUsersSelector } from "../features/users/UserSlice";
import { filterTasks } from "./Dashboard/utils/filterTasks";
import { CompletedFilter } from "../common/types";
import { IUser } from "../features/users/types";
import { useTasksSelector } from "../features/tasks/TaskSlice";

interface UserListProps {
  completedFilter: CompletedFilter;
  usernameFilter: string;
}

const UserList:React.FC<UserListProps> = ({ completedFilter,
  usernameFilter,}) => {
  const { users } = useUsersSelector();
  const { tasks } = useTasksSelector();

  const filteredTasks = useMemo(
      () => filterTasks({ users, tasks, completedFilter, usernameFilter }),
      [users, tasks, completedFilter, usernameFilter]
    );

    const uniqueUsers = useMemo(() => {
      const userMap = new Map<string, IUser>();
    
      filteredTasks.forEach((task) => {
        const user = users?.find((u) => u.id === task.userId);
        if (user && !userMap.has(String(user.id))) {
          userMap.set(String(user.id), user);
        }
      });
    
      return Array.from(userMap.values());
    }, [filteredTasks, users]);
    
  
  return <div>
   <ul>
        {uniqueUsers.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </ul>
    
  </div>;
};

export default UserList;
