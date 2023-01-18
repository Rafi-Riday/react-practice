import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:6969/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error(err));
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:6969/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => { setUsers(data) })
            .catch(err => { console.error(err) })
        event.target.reset();
    };

    const handleInput = event => {
        const newUser = { ...user };
        newUser[event.target.name] = event.target.value;
        setUser(newUser);
    };

    const handleDelete = user => {
        const { name, _id } = user;
        if (confirm(`Are you sure you delete user : ${name}`)) {
            fetch(`http://localhost:6969/users/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => setUsers(data))
                .catch(err => console.error(err))
        };
    };

    return (
        <div>
            <h2 style={{ marginBottom: '0' }}>Users :</h2>
            {
                users.map((user, idx) => <span key={idx}>
                    <br />
                    <span style={{ fontWeight: '900' }}>{user.name}</span> : {user.email}
                    &nbsp;<Link to={`/users/${user._id}`}>
                        <button>Edit</button>
                    </Link>
                    &nbsp;<button onClick={() => handleDelete(user)}>X</button>
                    <br />
                </span>)
            }
            <br />
            <h3>Add User</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInput} type="text" name="name" placeholder='name' />
                <br />
                <br />
                <input onChange={handleInput} type="email" name="email" placeholder='email' />
                <br />
                <br />
                <input type="submit" value="Enter User" />
            </form>
        </div>
    );
};

export default Users;

