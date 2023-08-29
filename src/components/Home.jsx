import React from 'react'
import pizza from "../assets/pizza.jpg"
import "../css/Home.css"
export const Home = () => {
  return (
    <div className="container">
      <div className='left'>
        <div className="text-content">
          <h1 style={{fontWeight:"bold"}}>Pizzaiolo</h1>
          <p>From our oven to your table, nothing but the best.</p>
          <button className="menu">View Menu</button>
        </div>
      </div>

      <div className="right">
        <div className="image-container">
          <img src={pizza} alt="" className="pizza" />
        </div>
      </div>
    </div>
  )
}
