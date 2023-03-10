import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h2>Friends : {friends.length}, YAY</h2>
            {
                friends.map(friend => <Friend friend={friend} key={friend.id} />)
            }
        </div>
    );
};

export default Friends;