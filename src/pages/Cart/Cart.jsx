import React, { useContext } from 'react'
import {ShopContext} from "../../context/shopcontext"
import DATA from '../../Products'
import CartItem from "./Cart-Item"
import styles from './cart.css'


export function Cart() {
  const {cartItems} = useContext(ShopContext)
  return (
    <div className='cart'>
 
    <h1>Your Cart Items</h1>
  
  <div className='cart-items'>
  {DATA.map((product) => { 
  if(cartItems[product.id] !== 0){
    return <CartItem data={product}/>

    };

  })};
</div>
  </div>
  
    
  )
}
