import React,{useState} from "react";
import './CartModal.scss'
import minusSquare from '../../assets/minus-square.svg';
import plusSquare from '../../assets/plus-square.svg';
import { NavLink } from "react-router-dom";



const CartModal = ({cartItemsArray,setCartDropdown,cartProductQuantity,setCartProductQuantity,totalAmount,summingTotalAmount}) => {
    const closeModalHandler=()=>{
      setCartDropdown(false);
    }

    const handleQuantityChange=(action, item)=>{
      if(action===1){
        setCartProductQuantity(prev => ({
          ...prev,
          [item.id]: prev[item.id] + 1
        }))

        summingTotalAmount();
      }
      else {

        setCartProductQuantity(prev=>({
          ...prev,
          [item.id]: prev[item.id] ? (prev[item.id] - 1) : 0
        }));
      }

   
      // console.log(cartProductQuantity.item.id)
      
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
              <img src={plusSquare} alt="plus" onClick={()=>handleQuantityChange(1, item)}/>
              <p>{cartProductQuantity[item.id]}</p>
              <img src={minusSquare} alt="minus" onClick={()=>handleQuantityChange(0, item)}/>
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
           <span>${totalAmount}</span>
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
