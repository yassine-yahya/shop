import React from 'react';
import DATA from '../../Products';
import {Product} from './Product';
import "./Shop.css";

export const Shop = () => {
return (
<div className='shop'>


    <div className='products'>
    {DATA.map((product) => (

    <Product key={product.id} data={product} />

    ))}

    </div>
</div>
)
}
