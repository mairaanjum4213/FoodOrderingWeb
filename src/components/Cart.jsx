import React , {useState,useEffect} from 'react'
import { useGlobalContext } from '../context/Context';
import "../css/Cart.css"
import { useNavigate } from 'react-router-dom';
export const Cart = () => {
  const {cartItem,addToCart,setCartItem} = useGlobalContext();
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    let total = 0;
    cartItem.forEach((item)=>{
      total+= Number(item.price*item.count);
    }
    )
    setTotalAmount(total);
  },[cartItem])
  const navigate= useNavigate();
  const removeItem=(id)=>{
    const updatedcart =cartItem.map((item)=>{
      if(item.id===id && item.count>1){
        return {...item, count:item.count-1}
      }
      
      else if(item.id===id && item.count<=1){
        return null;
      }
      return item;
    })
    //filter() function to remove any null items from the arra
    const filtercart = updatedcart.filter((item)=>item!==null);
    setCartItem(filtercart)

  }
  return (
    <>
    
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItem.length===0? "Your Cart is Empty!!" : (
          <div className="cart-wrapper">
          {cartItem.map((data)=>(
           <div key={data.id} className="cart">
            <img className="cartimg" src={data.image} />
            <div className="cartdet">
              <p>{data.name}</p>
              <div className="add-remove-button">
                <button onClick={()=>removeItem(data.id)}>-</button>
                <input type="text" value={data.count}/>
                <button onClick={()=>addToCart(data)}>+</button>
              </div>
              <p>${data.price}</p>
            </div>
           </div>
        ) 
        )}
        
        <p>Total Price : $ {totalAmount}</p>
          </div>
      )}

 
    <div className="buttons">
      {cartItem.length!==0 &&  <button className="checkout">Check Out</button> }
     
      <button  onClick = {()=>navigate('/')} className="back">Continue for Shopping</button>
    </div>
    
    </div>
  
   
   
    </>
  )
}
