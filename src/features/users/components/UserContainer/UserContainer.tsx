import { userApi } from "../../../../app/services/UserService"
import UserItem from "../UserItem/UserItem"


const UserContainer = () => {
    const {data: users, error, isLoading} = userApi.useFetchAllUsersQuery(5)
  return (
    <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong</h1>}
      {users?.map(user => 
        <UserItem user={user} key={user.id}/>
      )}
    </div>
  )
}

export default UserContainer
