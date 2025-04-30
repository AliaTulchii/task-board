import AddTodoBtn from '../../common/components/AddTodoBtn/AddTodoBtn'
import SearchInput from '../../common/components/SearchInput/SearchInput'
import TaskCard from '../../features/tasks/components/TaskCard/TaskCard'
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
      <TaskCard/>
    </main>
  )
}

export default Dashboard
