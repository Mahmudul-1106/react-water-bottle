const getCartFromLS =()=>{
    const getCartString = localStorage.getItem('cart');

    if(getCartString){

        const getCart = JSON.parse(getCartString);
        return getCart;
    }

    return [];
}

const saveCartToLS = (cart) =>{
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const removeFromLS = (id) =>{
    const storedCart = getCartFromLS();
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    saveCartToLS(remainingCart)
}

const sendCartToLS =(id) => {
    const cart = getCartFromLS();
    cart.push(id);
    saveCartToLS(cart);
}

export {getCartFromLS, sendCartToLS, removeFromLS}