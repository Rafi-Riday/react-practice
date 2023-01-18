import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { id, name, username } = friend;
    return (
        <div style={{ border: '2px solid peru', borderRadius: '15px', margin: '10px', padding: '10px', }}>
            <div style={{ fontSize: '20px', }}>Name : {name} <Link style={{ fontWeight: '500', textDecoration: 'none', color: '#88f', }} to={`/friends/${id}`}>{username}</Link></div>
        </div>
    );
};

export default Friend;