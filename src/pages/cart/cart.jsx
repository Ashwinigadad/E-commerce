import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import {ShopContext} from '../../context/shop-context'
import {CartItem} from './cartItem'
import "./cart.css"

import {useNavigate} from 'react-router-dom'

export const Cart = () => {
  const {cartItems,getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
            return < CartItem data={product}/>
          }

        }
          
        )}

      </div>
{totalAmount > 0 ?
      <div className='checkout'>
        <p>subtotal:₹{totalAmount}</p>
        <button onClick={()=>navigate("/")}>Continue shopping</button>
        <button>Checkout</button>
      </div>
:<h1>YOUR CART IS EMPTY</h1>}
    </div>
  )
}
