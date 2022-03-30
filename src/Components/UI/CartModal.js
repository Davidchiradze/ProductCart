import React,{useState} from "react";
import './CartModal.scss'
import minusSquare from '../../assets/minus-square.svg';
import plusSquare from '../../assets/plus-square.svg';
import { NavLink } from "react-router-dom";



const CartModal = ({cartItemsArray,setCartItemsArray,setCartDropdown,cartProductQuantity,setCartProductQuantity,totalAmount,summingTotalAmount}) => {
console.log("🚀 ~ file: CartModal.js ~ line 10 ~ CartModal ~ totalAmount", totalAmount)
    const closeModalHandler=()=>{
      setCartDropdown(false);
    }

    const handleQuantityChange=(action, item, e)=>{
      e.preventDefault();
      if(action===1){
        setCartProductQuantity(prev => ({
          ...prev,
          [item.id]: prev[item.id] + 1
        }))

        summingTotalAmount(item.price);
      }
      else {
        summingTotalAmount(-item.price)
        setCartProductQuantity(prev=>{
          if  (prev[item.id]===1){
            setCartItemsArray(prevArr=>prevArr.filter(element=>element.id!==item.id))
          }

          return{
          ...prev,
          [item.id]: prev[item.id] ? (prev[item.id] - 1) : 0
          
        }});

  
      }
    }

  const ModalDropDown = () => {

    return (
        <div className="cart-dropdown">
          {/* <span style={{fontfamily:'Raleway'}} >My Bag,</span>
          <span style={{fontfamily:'Raleway'}}>{numberOfItems} items</span> */}
          <h2 className="bag-quantity">My Bag, {cartItemsArray.length}Items</h2>
       <ul>
         {cartItemsArray.length>0 &&
         
         cartItemsArray.map((item)=>
         <React.Fragment>
        <li>
             <div className="cart-product-box">
                  <h3>{item.title}</h3>
                  <span className="cart-product-price">{item.price}</span>
                  <div className="cart-product-size">
                  <span>S</span>
                  <span>M</span>
                  </div>

            </div>
           <div className="plus-minus">
              <img src={plusSquare} alt="plus" onClick={(e)=>handleQuantityChange(1, item, e)}/>
              <p>{cartProductQuantity[item.id]}</p>
              <img src={minusSquare} alt="minus" onClick={(e)=>handleQuantityChange(0, item, e)}/>
           </div>
        <div>
             <img className="cart-product-photo" src={item.photo} alt="product-photo"/>
        </div>
         </li>
         
         </React.Fragment>
         
         )
      
         }
      </ul>
       {cartItemsArray.length>0 &&
         <div className="total-amount">
           <span>Total</span>
           <span>${totalAmount.toFixed(2)}</span>
         </div>}  
          <NavLink to={'/bag'}>VIEW BAG</NavLink>
          <NavLink to={'/checkout'}>CHECK OUT</NavLink>
      
      </div>


    
    )



  };

 
  return (
    <React.Fragment>  
            <div className="backdrop" onClick={closeModalHandler}/>
            <ModalDropDown/>
    </React.Fragment>
  );
};

export default CartModal;
