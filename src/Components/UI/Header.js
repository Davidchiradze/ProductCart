import React,{useState} from "react";
import navIcon from "../../assets/Group.svg";
import usdCurrency  from "../../assets/usd.svg";
import cartIcon  from "../../assets/cartIcon.svg";
import arrowIconDown  from "../../assets/arrowDown.svg";
import arrowIconUp from '../../assets/arrowUp.svg'
import './Header.scss'
import { NavLink } from "react-router-dom";


const navArr = [
    {
        name: 'WOMEN',
        to:'/WOMEN'
    },
    {
        name: 'MEN',
        to:'/MEN'
    },
    {
        name: 'KIDS',
        to:'/KIDS'
    }
]

const Header = ({cartItemsAmount}) => {
    const [dropDownIsValid, setDropDownIsValid] = useState(false);

    const handleDropDown=()=>{
        setDropDownIsValid(prev => !prev);
    }

  return (
    <div className="navigation">
      <div className="nav-list">
        <ul>
            {navArr.map(nav => (
                <NavLink to={nav.to} activeclassname={"active"} className="nav-li"> {nav.name} </NavLink> 
            ))}
        </ul>
      </div>
      <div>
        <img src={navIcon} alt="navicon" />
      </div>
      
      <div  className="nav-cartsection">
      <div>
        
      <label className="currency-label" htmlFor="currency"><img src={usdCurrency} alt="USD"/>
      {!dropDownIsValid && <img src={arrowIconDown} className="arrowicondown" alt="arrowDown" onClick={handleDropDown}/>}
        { dropDownIsValid &&
         <img className="arrowiconup" src={arrowIconUp} alt = "arrowUp" onClick={handleDropDown}/>         
         } 
      </label>

         {dropDownIsValid && 
         <ul className="dropdown"> 
             <li> $ USD</li>
             <li> € EUR </li>
             <li> ¥ JPY </li>
        </ul>}
    
         
      </div> 
      <div className="cart-and-quantity">
        <img src={cartIcon} alt="cart"/>
        {(cartItemsAmount>0) && <p className="cartItemsAmount">{cartItemsAmount}</p>}  
        </div>
        </div>
    </div>
  );
};

export default Header;
