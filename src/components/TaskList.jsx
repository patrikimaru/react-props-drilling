import TaskUpdateForm from './TaskUpdateForm';
import { useTaskContext } from '../context/TaskContext';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function TaskList() {
  const { tasks, completeTask, updateTask } = useTaskContext();

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className='header'>
              {task.title}{' '}
              <IoCheckmarkCircleOutline onClick={() => completeTask(task.id)} />
            </div>
            <br />
            <TaskUpdateForm task={task} updateTask={updateTask} />
          </li>
        ))}
      </ul>
    </div>
  );
}