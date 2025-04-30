import AddTodoBtn from '../../common/components/AddTodoBtn/AddTodoBtn'
import SearchInput from '../../common/components/SearchInput/SearchInput'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <main className='dashboard'>
      <div>
        <SearchInput/>
        <AddTodoBtn/>
        <div>Filter user by: Username</div>
        <div>Completed:true/false</div>
      </div>
      
    </main>
  )
}

export default Dashboard
