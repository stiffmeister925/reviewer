import React, { useState } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm';

export default function App() {
  return (
      <AddTaskForm/>
  );
}


/////////////////////////////////////////////////

import { useState } from 'react';

export default function AddTaskForm() {
  const [tasks, setTasks] = useState([]); // destructure pra sa task, pra ma map at para mag reflect ung changes
  const [isValidTask, setIsValidTask] = useState(true); // pra sa pag show ng hidden element

  const onKeyPress = (event) => {
    if(event.key === "Enter") { // pag nag press ng enter
      if(event.target.value === "") { // pag nag enter pero empty string 
        setIsValidTask(false); // seset nya kay isValidTask ay empty string
      }
      else { // pag may laman i aadd nmn nya sa array ng tasks ugn current value ng input
        setTasks([
          ...tasks, //spreat operator pra i add ung current value sa tasks array
          event.target.value
        ]);
        event.target.value = ""; // pra i set ulit sa empty string yung input after mag enter
      }
    } else {
      setIsValidTask(true); // pra pag mag ttype aq mwawala na ung input required
    }
  }
  const onSubmit = (event) => {
    event.preventDefault(); // pra di mag refresh ung page pag ka submit ng form
  }
  return (
      <form onSubmit={onSubmit}> // tawagin nya ung event na to pag ka enter
        <label>
          <input type="text" placeholder="Add your task" onKeyPress={onKeyPress}/> // dito ung event ng pag ka enter
        </label> 

        {isValidTask ? '' : <span className='input-required'>This field is required</span>}
         // if true ung value ni isValid Task return nya lng ''
         //else or if false si isValid lalabas sa ui to span className='input-required'This field is requiredspan

        <h1>Pending Tasks</h1>
        {tasks.map(task => {
          return <div className='task'>{task}</div>;
        })} //uupdate nya lng yung ui ng mga nkasave sa tasks


        {tasks.length === 0 ? <span className='task-required'>No Tasks Available</span> : ''}
        // kapag ung wala pang laman ung tasks ay ilalabas nya ung span na to

      </form>
  );
}