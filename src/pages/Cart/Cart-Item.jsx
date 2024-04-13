import React from 'react'
import { useContext } from "react"
import {ShopContext} from "../../context/shopcontext"

const CartItem = (props) => {
    const {id, name, price, image} = props.data;
    const { cartItems, addToCart, removeFromCart, updateAmountCount } = useContext(ShopContext)


  return (
    <div className='cart-item'>
    <img src={image}/>
    <div className='description'>
        <p><b>{name}</b></p>
        <p> <b>$ {price}</b></p>
        <div className='amount-handler'>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} onChange={(e)=> updateAmountCount(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)}>  + </button>
        </div>
    </div>
    </div>
  )
}

export default CartItem