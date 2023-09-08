import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

function TaskList() {
  const { tasks, completeTask, updateTask } = useTaskContext();
  const [updatedTitle, setUpdatedTitle] = useState(''); 

  const handleUpdateTask = (taskId) => {
    if (updatedTitle.trim() === '') return; 
    updateTask(taskId, { title: updatedTitle });
    setUpdatedTitle(''); 
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}{' '}
            <button onClick={() => completeTask(task.id)}>Complete</button>
            <input
              type="text"
              placeholder="New Task Title"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <button onClick={() => handleUpdateTask(task.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
