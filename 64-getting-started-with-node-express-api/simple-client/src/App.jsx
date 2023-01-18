import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [usersRes, setUsersRes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:6969/users`)
      .then(res => res.json())
      .then(data => { setUsersRes(data) })
      .catch(err => { console.log(err) })
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const { name: { value: name }, email: { value: email } } = event.target;
    event.target.reset();

    fetch(`http://localhost:6969/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then(res => res.json())
      .then(data => {
        setUsersRes(data);
      })
      .catch(err => {
        console.log(err);
      })
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="submit" value="Send Data" />
      </form>
      <h3>Users</h3>
      {
        usersRes?.map(u => <p key={u._id}>{u.name} : {u.email}</p>)
      }
    </div>
  );
};

export default App;