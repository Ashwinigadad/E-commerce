import React, { createContext,useState } from 'react'
import { PRODUCTS } from '../products';
export const ShopContext = createContext(null);

const getCartDeafault = ()=>{
  let cart={};
  for(let i=1;i<PRODUCTS.length+1;i++){
    cart[i]=0;
  }
  return cart;
}

export const ShopcontextProvider = (props) => {
  const [cartItems,setcartItems] = useState(getCartDeafault());
  const addTocart = (itemID)=>{
    setcartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}));
  }

  const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo=PRODUCTS.find((product)=>product.id===Number(item));
        totalAmount+=cartItems[item]*itemInfo.price
      }
    }
    return totalAmount;
  }

  const removeFromcart = (itemID)=>{
    setcartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}));
  }

  const updateCartItemCount  = (newAmount,itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:newAmount}));
  }
  const contextValue = {cartItems,addTocart,removeFromcart,updateCartItemCount,getTotalCartAmount}
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>

}


