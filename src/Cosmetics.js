import React, { useEffect, useState } from 'react';
import Cosmetic from './components/Cosmetic/Cosmetic';
// import { add } from './utilities/calculate';


const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data));
    }, [])
    // const cosmetics = [
    //     {id: 1, name: 'Alta', price: 100},
    //     {id: 2, name: 'Palish', price: 200},
    //     {id: 3, name: 'Malish', price: 300},
    //     {id: 4, name: 'Balish', price: 400},
    //     {id: 5, name: 'Nalish', price: 500}
    // ] 

    // const first = 55;
    // const second = 45;
    // const total = add(first, second);
    return (
        <div>
            <h1>Welcome to my cosmetics</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id}
                cosmetic = {cosmetic}
                ></Cosmetic>)
            }
            {/* <p>Total: {total}</p> */}
        </div>
    );
};

export default Cosmetics;