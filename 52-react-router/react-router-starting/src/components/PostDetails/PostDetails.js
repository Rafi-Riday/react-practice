import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const { userId, title, body } = useLoaderData();
    return (
        <div>
            <h4>{title}</h4>
            <div>{body}</div>
            <p><small>User : {userId}</small></p>
        </div>
    );
};

export default PostDetails;