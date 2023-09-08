import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

function TaskForm() {
  const { addTask } = useTaskContext();
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    addTask({ id: Date.now(), title: newTask });
    setNewTask('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
