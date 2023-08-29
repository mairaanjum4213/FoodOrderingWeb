import React , {useState,useEffect,useRef} from 'react'
import data from "../data/data.json"
import {motion} from 'framer-motion'
import "../css/Menu.css"
import {AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import {AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck";
import { useGlobalContext } from '../context/Context';
export const Menu = () => {
   
    let menu = Object.getOwnPropertyNames(data); 
      //get arrays of keys in object
    const[selected,setSelected] = useState(false);  
    const[selecteddish, setSelectedDish] = useState("pizza");
   
    const [width, setWidth] = useState(0);

    const slide = useRef(null);
    const innerSlide = useRef(null);
    const {addToCart,added} = useGlobalContext();
    useEffect(()=>{
      data[selecteddish].forEach((item)=>{
        item.id = item.id+item.name[0]+item.name[1];
      })
      setWidth(slide.current.scrollWidth-slide.current.offsetWidth);
      setTimeout(()=>{
        innerSlide.current.style.transform = "translateX(0)"
      },5);
     
    },[selecteddish])

    const handleMenu =(item, key)=>{
        setSelected(key);
        setSelectedDish(item);

        setTimeout(()=>{
          innerSlide.current.style.transform = "translateX(0)"
        },5);
       
    }

  return (
    <div className="wrapper">
      <h1 className="title">Menu</h1>

      <div className="menu-list-wrapper">
        <div className="menu-list">
            {menu.map((item, key)=> (
            
            <p  key={key} className={selected==key ? "item-container active" : "item-container"} onClick={()=>handleMenu(item,key)}>{item}</p>
        
            )
            )}
        </div>
      </div>

      <div>
        <motion.div ref={slide}  whileTap={{cusror:"grabbing"}}>
        <motion.div className="dish-container" drag="x"  dragConstraints={{right:width,left:-width}}  ref={innerSlide}>
                {data[selecteddish].map((dish,key)=>(
                <motion.div key={dish.id} className="img-container">
                  <motion.img className="dish-img" src={dish.image}  />
                  <h6 className="dishname">{dish.name}</h6>
                  <p className="dishdes">{dish.description}</p>
                  <div className="details">
                    <p>Spicy:{" "} {dish.spicy? <AiOutlineCheck style={{color:"green"}}/>: <AiOutlineClose style={{color:"red"}}/>}</p>
                    <p>Vegetarian: {" "}{dish.vegetarian? <AiOutlineCheck style={{color:"green"}}/>: <AiOutlineClose style={{color:"red"}}/>}</p>
                  </div>
                  <button  onClick={()=>addToCart(dish,key)} className="btn btn-add">{added===key ?"Added": "Add to Cart"}</button>
                </motion.div>
                 ))}
          </motion.div>
          </motion.div>
        </div> 

        </div>
     
  )
}
