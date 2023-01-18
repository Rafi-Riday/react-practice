import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <h3>Category</h3>
            <Link to='/category/1234'>Category : 1234</Link>
        </div>
    );
};

export default Category;