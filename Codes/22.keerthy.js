//keerthy.js
import React, { useState } from 'react';

const Keerthy = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleComplete = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      return updatedTodos;
    });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={handleTaskChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggleComplete(index)}
          >
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Keerthy;

//App.js
import React from "react";
import Keerthy from "./keerthy";

const App = () => {
  return (
    <div>
      <h1>Keerthy Example</h1>
      <Keerthy />
    </div>
  );
};

export default App;

