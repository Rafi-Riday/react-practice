import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CategoryID = () => {
    const id = useLoaderData();
    const [course, setCourse] = useState(null);
    console.log(course);
    useEffect(() => {
        fetch(`http://localhost:6969/course/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data))
            .catch(e => alert(e));
    }, []);
    return (
        <div>
            <h3>Category : {id}</h3>
            <Link to='/category'>Category</Link>
        </div>
    );
};

export default CategoryID;