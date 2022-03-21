import "./CategorySection.scss";
import React,{useState}from 'react'
import GreenCart from '../../assets/GreenCart.svg';
import { NavLink } from "react-router-dom";



const CategorySection = ({setCartItems, cartItems, setCartItemsAmount, productArray}) => {
  // const [state, setstate] = useState({
  //   items: [],
  //   count: 0,
  //   })

  const handleCart=(id,e)=>{
    e.preventDefault();

    setCartItemsAmount(prev => {
      let nextState = prev
      if(!cartItems.includes(id)){
        setCartItems(prev=> [...prev,id])
      nextState++
      }
      return nextState
    })

  }
    // console.log(cartItemsAmount)
  
  
  return (
    <section className="section">
      <h2>Category name</h2>
      <ul> 
        {
        productArray.map((item)=>
    (<div className="product-list">
    <NavLink to={`${window.location.pathname}/item/${item.id}`} className="navLink" >
          <img className="product-image" src={item.photo} alt="img" />
          <div className="product-description">
          <p>{item.title}</p>
          <span>{item.price}</span>
          <img className="greencart" src={GreenCart} alt="GrenCart" onClick={(e)=>handleCart(item.id,e)} />
          </div>
    </NavLink>
      </div>))
      } </ul>
    </section>
  );
  };

export default CategorySection;
