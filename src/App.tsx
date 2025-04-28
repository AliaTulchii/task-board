import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks/redux"
import { fetchUsers } from "./app/store/redusers/ActionCreators"


function App() {
const dispatch = useAppDispatch()
const {users, isLoading, error} = useAppSelector(state => state.userReducer)

useEffect(()=> {
dispatch(fetchUsers())
}, [])

return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

    {JSON.stringify(users, null, 2)}
  
    </div>
  )
}

export default App
