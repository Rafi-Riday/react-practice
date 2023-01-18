import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const [friendData, setFriendData] = useState({});
    const friendId = useLoaderData();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
            .then(res => res.json())
            .then(data => {
                const newData = data.find(singleData => singleData.id.toString().toLowerCase() === friendId.toString().toLowerCase());
                setFriendData(newData);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { name, username, email, phone } = friendData;
    return (
        <div>
            <br />
            <div style={{ fontSize: '20px', fontWeight: '500' }}>Everything you need to know about Friend : {name} {username}</div>
            <br />
            <div>email : {email}</div>
            <br />
            <div>Phone : {phone}</div>
        </div>
    );
};

export default FriendDetails;