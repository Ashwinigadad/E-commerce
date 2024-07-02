import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context'

export const Product = (props) => {
    const {id,productName,price,productImage}=props.data;
    const {addTocart,cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
  return (
    <div className='product'>
        <img src={productImage}/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>{price}</p>
        </div>
        <button className='addTocartBtn' onClick={()=>addTocart(id)}> Add to cart
          {cartItemAmount>0 && <>({cartItemAmount})</>}
        </button>
    </div>
  );

    
  
}


