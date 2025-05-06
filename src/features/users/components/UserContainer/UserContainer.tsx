import { useSelector } from "react-redux";
import UserItem from "../UserItem/UserItem"
import { selectAllUsers, selectUsersError, selectUsersLoading } from "../../selectors";
import { ERROR_MESSAGE, LOADING } from "../User.Constants";


const UserContainer = () => {
  const users = useSelector(selectAllUsers);
  const usersLoading = useSelector(selectUsersLoading);
  const usersError = useSelector(selectUsersError);

  return (
    <div>
        {usersLoading && <h1>{LOADING}</h1>}
        {usersError && <h1>{ERROR_MESSAGE}</h1>}
      {users?.map(user => 
        <UserItem user={user} key={user.id}/>
      )}
    </div>
  )
}

export default UserContainer
