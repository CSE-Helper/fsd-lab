//CodeSandBox.js

import React, { useState } from 'react';

const INITIAL_LIST = {
  "Organize closet": [
    { "Donate old clothes and shoes": false },
    { "Buy new shelf": false },
    { "Put in shelf by color": false },
  ],
  "Finish homework": [
    { "Finish math homework": false },
    { "Finish science homework": false },
    { "Finish Reactjs homework": false },
  ],
  "Achieve nirvana": [
    { "Meditate a little": false },
    { "Gain some wisdom": false },
  ],
};

function CodeSanBox() {
  const [taskList, setTaskList] = useState(INITIAL_LIST);

  const toggleSubtask = (task, subtask) => {
    const updatedList = { ...taskList };
    const subtasks = updatedList[task];

    for (let i = 0; i < subtasks.length; i++) {
      if (subtasks[i].hasOwnProperty(subtask)) {
        subtasks[i][subtask] = !subtasks[i][subtask];
        break;
      }
    }

    setTaskList(updatedList);
  };

  return (
    <div>
      <h1>Task List</h1>
      {Object.entries(taskList).map(([task, subtasks]) => (
        <div key={task}>
          <h3>{task}</h3>
          <div>
            <h4>Completed</h4>
            <ul>
              {subtasks
                .filter((subtask) => subtask[Object.keys(subtask)[0]])
                .map((subtask, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      toggleSubtask(task, Object.keys(subtask)[0])
                    }
                  >
                    {Object.keys(subtask)[0]}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h4>To be Completed</h4>
            <ul>
              {subtasks
                .filter((subtask) => !subtask[Object.keys(subtask)[0]])
                .map((subtask, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      toggleSubtask(task, Object.keys(subtask)[0])
                    }
                  >
                    {Object.keys(subtask)[0]}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CodeSanBox;

//App.js
import React from 'react';
import CodeSanBox from './CodeSandBox';

const App = () => {
  return (
    <div>
      <h1>CodeSanBox Example</h1>
      <CodeSanBox />
