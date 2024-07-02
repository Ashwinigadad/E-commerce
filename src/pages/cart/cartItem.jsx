import React,{useContext} from 'react'
import {ShopContext} from '../../context/shop-context'

import "./cart.css"

export const CartItem = (props) => {
    const {id,productName,price,productImage}=props.data;
    const {cartItems,addTocart,removeFromcart} = useContext(ShopContext);


  return (
    <div className='cartItem'>
        <img src={productImage}></img>
        <div className='description'>
        <p className='productName'>{productName}</p>
        <p className='price'>₹{price}</p>
        <div className='countHandler'>
            <button onClick={()=>removeFromcart(id)}>-</button>
            <input value={cartItems[id]}></input>
            <button onClick={()=>addTocart(id)}>+</button>

        </div>
        </div>
    </div>
  )
}


