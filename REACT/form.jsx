//AddTaskForm

export default function AddTaskForm({task, onTaskAdd}) {
  const onKeyPress = (event) => {
    if(event.key === "Enter") {
      onTaskAdd(event.target.value);
    }
  }
  return (
    <form>
      <label>
        <input type="text" placeholder="Add your task" onKeyPress={onKeyPress}/>
      </label>
    </form>
  );
}

//app.jsx

import React, { useState } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

export default function App() {
  const [tasks, setTasks] = useState([])

  const onTaskAdd = (task) => {
    setTasks([
      ...tasks,
      task
    ]);
  }
  return (
    <>
      <AddTaskForm onTaskAdd={onTaskAdd}/>
      <TaskList tasks={tasks}/>
    </>
  );
}

//tasklist

import React from 'react';
import AddTaskForm from './AddTaskForm';

export default function TaskList({tasks}) {
  return (
    tasks.map(task => {
      return <AddTaskForm key={task} task={task} />
    })
  );
}

