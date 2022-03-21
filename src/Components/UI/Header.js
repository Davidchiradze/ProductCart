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

const Header = () => {
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
      <label htmlFor="currency"><img src={usdCurrency} alt="USD"/></label>
         {!dropDownIsValid && <img src={arrowIconDown} className="arrowicondown" alt="arrowDown" onClick={handleDropDown}/>}
        { dropDownIsValid &&
         <img src={arrowIconUp} alt = "arrowUp" onClick={handleDropDown}/>         
         } 
         {dropDownIsValid && 
         <ul className="dropdown"> 
             <li> $ USD</li>
             <li> € EUR </li>
             <li> ¥ JPY </li>
        </ul>}
          <img src={cartIcon} alt="cart"/>
      </div>
    </div>
  );
};

export default Header;
