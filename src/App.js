import React, { useState } from 'react';
import './App.css';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompletion(taskId) {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function removeTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
