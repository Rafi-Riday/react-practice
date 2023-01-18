import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title } = post;
    const navigateFunc = useNavigate();
    const navigate = (link) => {
        navigateFunc(link);
    }
    return (
        <div style={{ border: '2px solid peru', borderRadius: '15px', padding: '20px', }}>
            <h4>{title}</h4>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', }}>
                <Link to={`/posts/${id}`}>Details : {id}</Link>
                <Link to={`/posts/${id}`}>
                    <button>Details : {id}</button>
                </Link>
                <button onClick={() => navigate(`/posts/${id}`)}>Details : {id}</button>
            </div>
        </div>
    );
};

export default Post;