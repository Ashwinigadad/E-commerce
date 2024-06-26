import React, { createContext,useState } from 'react'
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

  // const removeFromcart = (itemID)=>{
  //   setcartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}));
  // }
  // return <ShopContext.Provider>{props.children}</ShopContext.Provider>

}


