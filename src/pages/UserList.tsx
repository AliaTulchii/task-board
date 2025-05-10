import UserItem from "../features/users/components/UserItem/UserItem";
import { useUsersSelector } from "../features/users/UserSlice";

const UserList = () => {
  const { users } = useUsersSelector();
  return <div>
    <ul>
      {users.map((user) => (
        <UserItem user= {user} key={user.id}/>
      ))}
    </ul>
    
  </div>;
};

export default UserList;
