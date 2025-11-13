import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css';
import { sendCartToLS, getCartFromLS } from '../../utilities/localStorage';

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

   

    
    return (
        <div>
            <h3>Bottle No:{bottles.length}</h3>
            <h5>Bottle added to Cart : {card.length} </h5>
            
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