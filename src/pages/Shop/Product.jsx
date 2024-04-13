import React, { useContext } from 'react'
import {ShopContext} from "../../context/shopcontext"



export function Product(props) {
    const {id, name, price, image} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)
    // to grab the number of items of every product after clicking
    //on the add button
    const cartItemAmount = cartItems[id]
  return (
    <div className='product' key={id}>
        <img src={image} alt="product"/>
        <div className='description'>
            <p><b>{name}</b></p>
            <p>${price}</p>
            <button className='addbtn' onClick={()=> addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
            </button>
        </div>

    </div>
  )
}

