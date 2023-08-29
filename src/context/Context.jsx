import React, { createContext, useContext,useState } from 'react'

const ContextApp = createContext(null);

export const useGlobalContext = ()=> useContext(ContextApp);

export const Context = (props) => {
    const [cartItem, setCartItem] = useState([]);
    const [added,setadded] = useState(null);
    const addToCart = (dish,key) => {
      setTimeout(()=>setadded(null)
      ,1000)
      setadded(key);
      // Find if the dish is already in the cart
      const exitem = cartItem.find((item) => item.id === dish.id);
    
      // If the dish is already in the cart
      if (exitem) {
        // Update the cart by increasing the count of the existing dish
        setCartItem((prev) =>
          prev.map((item) =>
            item.id === dish.id ? { ...item, count: item.count + 1 } : item
          )
        );
      } else {
        // If the dish is not in the cart, add it with a count of 1
        setCartItem([...cartItem, { ...dish, count: 1 }]);
      }
    };
   
    
    
    
    
  return (
    <>  
    <ContextApp.Provider value={{addToCart,cartItem,setCartItem,added}}>
    {props.children}
   </ContextApp.Provider> </>
   
  )
}
