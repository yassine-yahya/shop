import React, { useState } from 'react'
import { createContext } from 'react'
import DATA from '../Products'
export const ShopContext = createContext(null)



//funtion to give a 0 item for every ID product and pass it to useState
const getDefaultCart = () =>{
let cart = {};
for(let i = 1 ; i < DATA.length +1  ; i++){
cart[i] = 0
}
return cart;
};




export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    //Add to Cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
    }

    //manage the number of items by input
    const updateAmountCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }
    //Remove from Cart

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateAmountCount}
    console.log(cartItems);
return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
)};
