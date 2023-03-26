import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import ('./Cosmetic.css')

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id)
    }
    // const addToCartWtihParam = () => addToCart(id);

    return (
        <div className='product'>
            {/* <h2>Buy this: {props.cosmetic.name}</h2>
            <p>Price: {props.cosmetic.price}</p> */}
            <h2>Name: {name}</h2>
            <p>Price: ${price}</p> 
            <p>It has id: {id}</p> 
            {/* <button onClick={addToCartWtihParam}>Add to cart</button> */}
            <button onClick={() => addToCart(id)}>add to cart: shortcut</button>
        </div>
    );
};

export default Cosmetic;