import Header from '../../common/components/Header/Header'
import TaskList from '../../features/tasks/components/TaskList/TaskList'
import './Dashboard.css'
import { useEffect, useState } from 'react';
import { fetchTasks, fetchUsers } from '../../app/store/reducers/ActionCreators';
import { useAppDispatch} from '../../app/hooks/redux';
import { useUsersSelector } from '../../features/users/UserSlice';
import { useTasksSelector } from '../../features/tasks/TaskSlice';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { users } = useUsersSelector();
  const { tasks } = useTasksSelector();

  const [usernameFilter, setUsernameFilter] = useState('');
  const [completedFilter, setCompletedFilter] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchTasks());
  }, [dispatch]);

  if (!users.length || !tasks.length) {
    return <h1>Loading...</h1>;
  }

  const filteredTasks = tasks.filter(task => {
    const matchesCompleted =
      completedFilter === '' ||
      String(task.completed) === completedFilter;
    const user = users.find(u => u.id === task.userId);
    const matchesUsername =
      !usernameFilter || user?.name.toLowerCase().includes(usernameFilter.toLowerCase());

    return matchesCompleted && matchesUsername;
  });

  return (
    <main className='dashboard'>
      <Header
       usernameFilter={usernameFilter}
        completedFilter={completedFilter}
        onUsernameChange={setUsernameFilter}
        onCompletedChange={setCompletedFilter}
      />
      <TaskList tasks={filteredTasks} users={users}/>
    </main>
  );
}

export default Dashboard
