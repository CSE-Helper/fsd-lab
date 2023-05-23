//TeamSelector.js
import React, { useState } from 'react';

const TeamSelector = ({ names }) => {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [selectingTeam1, setSelectingTeam1] = useState(true);

  const handleNameClick = (name) => {
    if (selectingTeam1) {
      setTeam1((prevTeam1) => [...prevTeam1, name]);
    } else {
      setTeam2((prevTeam2) => [...prevTeam2, name]);
    }
  };

  const handleToggleSelection = () => {
    setSelectingTeam1((prevSelectingTeam1) => !prevSelectingTeam1);
  };

  const handleRandomizeTeams = () => {
    const allNames = [...team1, ...team2];
    const randomizedNames = shuffleArray(allNames);
    const halfLength = Math.ceil(randomizedNames.length / 2);
    setTeam1(randomizedNames.slice(0, halfLength));
    setTeam2(randomizedNames.slice(halfLength));
  };

  const handleReset = () => {
    setTeam1([]);
    setTeam2([]);
    setSelectingTeam1(true);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    <div>
      <div>
        {names.map((name) => (
          <button
            key={name}
            onClick={() => handleNameClick(name)}
            disabled={selectingTeam1 ? team1.includes(name) : team2.includes(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div>
        <button onClick={handleToggleSelection}>
          Now selecting for {selectingTeam1 ? 'Team 1' : 'Team 2'}
        </button>
      </div>
      <div>
        <h2>Team 1</h2>
        <ul>
          {team1.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <h2>Team 2</h2>
        <ul>
          {team2.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={handleRandomizeTeams}>Randomize Teams</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default TeamSelector;

//App.js
import React from 'react';
import TeamSelector from './component/TeamSelector';

const App = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'Gary', 'Hector']; // Replace with your desired list of names

  return (
    <div>
      <h1>Team Selector Example</h1>
      <TeamSelector names={names} />
    </div>
  );
};

export default App;
