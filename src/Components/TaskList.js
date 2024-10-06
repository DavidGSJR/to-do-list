import React from 'react';
import './TaskList.css';

function TaskList({ tasks, toggleTaskCompletion, removeTask }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <span onClick={() => toggleTaskCompletion(task.id)}>
            {task.text}
          </span>
          <button onClick={() => removeTask(task.id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
