//Login.js
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([{ username: 'admin', password: 'password' }]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length < 6 || password.length < 6) {
      alert('Username and password must be at least 6 characters long.');
      return;
    }

    const existingUser = users.find((user) => user.username === username && user.password === password);

    if (existingUser) {
      alert(`Welcome back, ${existingUser.username}!`);
      setUsername('');
      setPassword('');
    } else {
      setUsers([...users, { username, password }]);
      alert('Account created successfully!');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} maxLength={20} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} maxLength={20} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;

//App.js
import React from 'react';
import Login from './component/Login';

const App = () => {
  return (
    <div>
      <h1>Login Example</h1>
      <Login />
    </div>
  );
};

export default App;
