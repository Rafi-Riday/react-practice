import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EditUser = () => {
    const [userData, setUserData] = useState(useLoaderData());
    const [inputUser, setInputUser] = useState(userData);

    const handleSubmit = event => {
        event.preventDefault();
        fetch(`http://localhost:6969/users/${userData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(inputUser),
        })
            .then(res => res.json())
            .then(data => setUserData(data))
            .catch(err => console.error(err))
    };

    const handleInput = event => {
        const newUser = { ...inputUser };
        newUser[event.target.name] = event.target.value;
        setInputUser(newUser);
    };

    return (
        <div>
            <h3>Name : {userData.name}</h3>
            <p>Email : {userData.email}</p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInput} type="text" defaultValue={userData.name} name="name" />
                <input onChange={handleInput} type="email" defaultValue={userData.email} name="email" />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default EditUser;

