import { useState } from "react";

export default function TaskUpdateForm({ task, updateTask }) {
  const [updatedTitle, setUpdatedTitle] = useState('');

  const handleUpdateTask = () => {
    if (updatedTitle.trim() === '') return;
    updateTask(task.id, { title: updatedTitle });
    setUpdatedTitle('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Task Title"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <button onClick={handleUpdateTask}>Update</button>
    </div>
  );
}

