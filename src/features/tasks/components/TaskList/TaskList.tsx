import { IUser } from "../../../users/types";
import { ITask } from "../../types";
import TaskCard from "../TaskCard/TaskCard";
import { useTasksSelector } from "../../TaskSlice";

interface TaskListProps{
  tasks: ITask[],
  users: IUser[],
}

const TaskList:React.FC<TaskListProps> = ({tasks, users}) => {
  const {  isLoading, error } = useTasksSelector();
 
   if (isLoading ) return <h1>Loading...</h1>;
   if (error ) return <h1>Error loading data</h1>;
 
   return (
     <ul>
       {tasks?.map((todo:ITask) => {
         const user = users?.find((u:IUser) => u.id === todo.userId);
 
         return (
           <TaskCard user={user} todo={todo} key={todo.id || `${todo.userId}-${todo.title}`}/>
         );
       })}
     </ul>
   );
}

export default TaskList
