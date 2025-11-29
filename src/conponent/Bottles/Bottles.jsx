import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css';
import { sendCartToLS, getCartFromLS, removeFromLS } from '../../utilities/localStorage';
import Cart from '../cart/cart';

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise);


    useEffect(()=>{
        const cartID = getCartFromLS();
        const storeCart = [];
        console.log(cartID);
        for(const id of cartID){
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storeCart.push(cartBottle);
            }
        }
        console.log(storeCart);
        setCard(storeCart)
    },[bottles])

    const[card, setCard] = useState([]);

    const handleToCard = (bottle) =>{
        let newCard = [...card, bottle];
        setCard(newCard);
        // sendLocalStorage(newCard);
        sendCartToLS(bottle.id);
        // console.log(card);
    }

    const handleRemoveFromTheCard = id =>{
        console.log('Remove from the card', id);
        const remainingCard = card.filter(bottle => bottle.id !== id);
        setCard(remainingCard);
        removeFromLS(id);
    }

   

    
    return (
        <div>
            <h3>Bottle No:{bottles.length}</h3>
            <h5>Bottle added to Cart : {card.length} </h5>
            <Cart card={card} handleRemoveFromTheCard={handleRemoveFromTheCard}></Cart>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle
                                             key={bottle.id} 
                                             handleToCard= {handleToCard}
                                             bottle={bottle} >
                                             </Bottle>)
                }
            </div>

        </div>
    );
    
    
};

export default Bottles;