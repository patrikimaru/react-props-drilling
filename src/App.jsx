import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { TaskProvider } from './context/TaskContext';

export default function App() {
  return (
    <TaskProvider>
      <TaskForm />
      <TaskList />
    </TaskProvider>
  );
};

