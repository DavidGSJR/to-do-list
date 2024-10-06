import React, { useState } from 'react';
import './TaskInput.css';

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskInput;
