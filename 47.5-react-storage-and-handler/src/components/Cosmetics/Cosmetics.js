import React, { useEffect, useState } from 'react';
import Cosmetic from '../../components/Cosmetic/Cosmetic';
import { GTP } from '../../utilities/calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, []);
    const total = GTP(cosmetics);
    return (
        <div>
            <h2>Welcome to my Cosmetics store</h2>
            <p>Total money needed : {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id} />)
            }
        </div>
    );
};

export default Cosmetics;