import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const newPhoneList = data.data.data.map(phone => {
                    const singlePhone = {
                        name: phone.phone_name,
                        price: phone.slug.split('-')[1],
                    };
                    return singlePhone;
                });
                setPhones(newPhoneList);
            })
    }, []);
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={300} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Phones;