import React from 'react';
import './cart.css'

const Cart = ({card, handleRemoveFromTheCard}) => {
    return (
        <div className='cart-container'>
            {
                card.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                    <button onClick={()=>handleRemoveFromTheCard(bottle.id)}>x</button>
                </div>)
            }
        </div>
    );
};

export default Cart;