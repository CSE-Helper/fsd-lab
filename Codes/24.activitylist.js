//ActivityList.js
import React, { useState, useEffect } from 'react';

const ActivityList = () => {
  const [activities, setActivities] = useState([]);

  const fetchActivity = async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();
      setActivities((prevActivities) => [...prevActivities, data]);
    } catch (error) {
      console.error('Error fetching activity:', error);
    }
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  const renderDetails = (activity) => {
    const { type, participants, price, link, key, accessibility } = activity;
    return (
      <div>
        <p>Type: {type}</p>
        <p>Participants: {participants}</p>
        <p>Price: {price}</p>
        <p>Link: {link}</p>
        <p>Key: {key}</p>
        <p>Accessibility: {accessibility}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Activity List</h1>
      <button onClick={fetchActivity}>Generate Activity</button>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.activity}
            <button onClick={() => renderDetails(activity)}>Details</button>
            {activity.expanded && renderDetails(activity)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;

//App.js
import React from 'react';
import ActivityList from './component/ActivityList';

const App = () => {
  return (
    <div>
      <h1>ActivityList Example</h1>
      <ActivityList />
    </div>
  );
};

export default App;
