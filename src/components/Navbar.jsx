import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './Navbar.css'

export const Navbar = () => {
return (
<div className='navbar'>
<h3>YAHYA SHOP</h3>

<div className='links'>

<Link to='/'> <button>Shop</button> </Link>

<Link to='/cart'> 
<ShoppingCart size={32}/>
</Link>

</div>

</div>
)
}
