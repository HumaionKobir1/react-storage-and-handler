import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shose = () => {
    const first = 15;
    const second = 11;
    const result = multiply(first, second);
    const sum = add(first , second);
    return (
        <div>
            <h3>This is Shoes compo: </h3>
            <p>Result: {result} Sum: {sum}</p>
        </div>
    );
};

export default Shose;