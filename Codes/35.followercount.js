//FollowerCount.js
import React, { useState } from 'react';

const FollowerCount = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);
  const [followings, setFollowings] = useState({});
  const [followers, setFollowers] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();

    if (name.trim() !== '') {
      setNames((prevNames) => [...prevNames, name.trim()]);
      setFollowings((prevFollowings) => ({ ...prevFollowings, [name.trim()]: [] }));
      setFollowers((prevFollowers) => ({ ...prevFollowers, [name.trim()]: [] }));
      setName('');
    }
  };

  const handleFollowSubmit = (event) => {
    event.preventDefault();

    const followerName = event.target.elements.followerName.value.trim();
    const followingName = event.target.elements.followingName.value.trim();

    if (followerName !== followingName) {
      if (!followings[followerName].includes(followingName)) {
        setFollowings((prevFollowings) => ({
          ...prevFollowings,
          [followerName]: [...prevFollowings[followerName], followingName],
        }));
        setFollowers((prevFollowers) => ({
          ...prevFollowers,
          [followingName]: [...prevFollowers[followingName], followerName],
        }));
        event.target.reset();
      } else {
        alert(`${followerName} already follows ${followingName}`);
      }
    } else {
      alert("You can't follow yourself");
    }
  };

  const handleNameClick = (clickedName) => {
    const followingCount = followings[clickedName].length;
    const followerCount = followers[clickedName].length;
    alert(`${clickedName} has ${followingCount} following(s) and ${followerCount} follower(s).`);
  };

  return (
    <div>
      <form onSubmit={handleNameSubmit}>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Enter a name" />
        <button type="submit">Add Name</button>
      </form>
      <ul>
        {names.map((name) => (
          <li key={name} onClick={() => handleNameClick(name)}>
            {name}
          </li>
        ))}
      </ul>
      <form onSubmit={handleFollowSubmit}>
        <input type="text" name="followerName" placeholder="Enter follower's name" />
        <input type="text" name="followingName" placeholder="Enter following's name" />
        <button type="submit">Follow</button>
      </form>
    </div>
  );
};

export default FollowerCount;

//App.js
import React from 'react';
import FollowerCount from './component/FollowerCount';

const App = () => {
  return (
    <div>
      <h1>FollowerCount Example</h1>
      <FollowerCount />
    </div>
  );
};

export default App;
