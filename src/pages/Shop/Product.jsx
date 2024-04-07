import React from 'react'

export function Product(props) {
    const {id, name, price, image} = props.data
  return (
    <div className='product' key={id}>
        <img src={image} alt="product"/>
        <div className='description'>
            <p><b>{name}</b></p>
            <p>${price}</p>
        </div>

    </div>
  )
}

