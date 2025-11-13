import React from 'react';
import './bottle.css'

const Bottle = ({bottle, handleToCard}) => {

    const{img, name, price, stock} = bottle;
    return (
        <div className='card'>
            <img width={300} src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5>Price: ${price}</h5>
            <h6>{stock} remaining</h6>
            <button onClick={() =>handleToCard(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;