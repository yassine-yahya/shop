import React, { useContext } from 'react'
import {ShopContext} from "../../context/shopcontext"
import DATA from '../../Products'
import CartItem from "./Cart-Item"
import styles from './cart.css'
import { useNavigate } from 'react-router-dom'


export function Cart() {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className='cart'>
 
    <h1>Your Cart Items</h1>
  
  <div className='cart-items'>
  {DATA.map((product) => { 
  if(cartItems[product.id] !== 0){
    return <CartItem data={product}/>

    }

  })}
</div>
{totalAmount > 0 ?
<div className="checkout">
  <p>Total of cart : ${Math.floor(totalAmount)}</p>
  <div className= "checkout-btn">
  <button onClick={()=> navigate("/")}>Continue Shopping</button>
  <button>Checkout</button>
  </div>
  </div>
  : <h1>Your Cart is empty</h1>
}

</div>
)}
