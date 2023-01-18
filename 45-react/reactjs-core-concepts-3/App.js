import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

/**
 * fetching data
 */

function App() {
  return (
    <div className="App">
      <ExternalUser />
    </div>
  );
}

function ExternalUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  return (
    <div>
      {
        users.map(user => <User name={user.name} email={user.email} />)
      }
    </div>
  );
}

function User(props) {
  return (
    <div style={{ margin: '10px', border: '5px solid #f55', borderRadius: '15px', }}>
      <h1 style={{ fontWeight: '300', }}>Name : <span style={{ color: '#53f', fontWeight: '500', }}>{props.name}</span></h1>
      <p>Email : <u>{props.email}</u></p>
    </div>
  );
}

export default App;
