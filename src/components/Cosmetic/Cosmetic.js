import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    return (
        <div>
            {/* <h2>Buy this: {props.cosmetic.name}</h2>
            <p>Price: {props.cosmetic.price}</p> */}
            <h2>Buy this: {name}</h2>
            <p>Price: {price}</p> 
            <p>It has id: {id}</p> 
        </div>
    );
};

export default Cosmetic;