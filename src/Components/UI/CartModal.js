import React from "react";
import './CartModal.scss'
import minusSquare from '../../assets/minus-square.svg';
import plusSquare from '../../assets/plus-square.svg';
import { NavLink } from "react-router-dom";


const CartModal = ({cartItemsArray,setCartDropdown,cartProductQuantity,setCartProductQuantity}) => {

  
    const closeModalHandler=()=>{
      setCartDropdown(false);
    }

    const numberOfItems = cartItemsArray.length;

    const handleQuantityChange=(action)=>{
      if(action===1){
        setCartProductQuantity(prev=>prev+1)
      }
      else 
      if(cartProductQuantity>0){

        setCartProductQuantity(prev=>prev-1);
      }
    }

  const ModalDropDown = () => {

    return (
        <div className="cart-dropdown">
          {/* <span style={{fontfamily:'Raleway'}} >My Bag,</span>
          <span style={{fontfamily:'Raleway'}}>{numberOfItems} items</span> */}
          <h2 className="bag-quantity">My Bag, {numberOfItems}Items</h2>
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
              <img src={plusSquare} alt="plus" onClick={()=>handleQuantityChange(1)}/>
              <p>{cartProductQuantity}</p>
              <img src={minusSquare} alt="minus" onClick={()=>handleQuantityChange(0)}/>
           </div>
        <div>
             <img className="cart-product-photo" src={item.photo} alt="product-photo"/>
        </div>
         </li>
         
         </React.Fragment>
         
         )
      
         }
      </ul>
         <div className="total-amount">
           <span>Total</span>
           <span>$100.00</span>
         </div>
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
