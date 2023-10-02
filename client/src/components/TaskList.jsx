import TaskCard from './TaskCard.jsx'
import {useContext} from 'react'
import { TaskContext } from '../context/TaskContext';

function TaskList() {
  const {tasks} = useContext(TaskContext);

  if(tasks.length === 0) {
    return (
      <div>
        <h1 className='text-gray-800 text-4xl font-bold text-center'>Crea una tarea para que aparezca aqui!</h1>
      </div>
    )
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
      {tasks.map((task, i) => (
        <TaskCard key = {i} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;