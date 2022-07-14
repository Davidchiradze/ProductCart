import React, { useState } from "react";
import "./CartModal.scss";
import minusSquare from "../../assets/minus-square.svg";
import plusSquare from "../../assets/plus-square.svg";
import { NavLink } from "react-router-dom";

const sizes = ["S", "M"];

const CartModal = ({ ...propsebi }, setCartDropdown) => {
  const closeModalHandler = () => {
    propsebi.setCartDropdown(false);
  };

  const handleQuantityChange = (action, item, e) => {
    e.preventDefault();
    if (action === 1) {
      propsebi.setCartProductQuantity((prev) => ({
        ...prev,
        [item.id]: prev[item.id] + 1,
      }));

      propsebi.summingTotalAmount(item.price);
    } else {
      propsebi.summingTotalAmount(-item.price);
      propsebi.setCartProductQuantity((prev) => {
        if (prev[item.id] === 1) {
          propsebi.setCartItemsArray((prevArr) =>
            prevArr.filter((element) => element.id !== item.id)
          );
        }

        return {
          ...prev,
          [item.id]: prev[item.id] ? prev[item.id] - 1 : 0,
        };
      });
    }
  };

  return (
    <React.Fragment>
      <div className="backdrop" onClick={closeModalHandler} />
      <div className="cart-dropdown">
        {/* <span style={{fontfamily:'Raleway'}} >My Bag,</span>
          <span style={{fontfamily:'Raleway'}}>{numberOfItems} items</span> */}
        <h2 className="bag-quantity">
          My Bag, {propsebi.cartItemsArray.length}Items
        </h2>
        <ul>
          {propsebi.cartItemsArray.length > 0 &&
            propsebi.cartItemsArray.map((item) => (
              <React.Fragment>
                <li>
                  <div className="cart-product-box">
                    <h3>{item.title}</h3>
                    <span className="cart-product-price">{item.price}</span>
                    <div className="cart-product-size">
                      <span>{item.id.split("-")[1]}</span>
                    </div>
                  </div>
                  <div className="plus-minus">
                    <img
                      src={plusSquare}
                      alt="plus"
                      onClick={(e) => handleQuantityChange(1, item, e)}
                    />
                    <p>{propsebi.cartProductQuantity[item.id]}</p>
                    <img
                      src={minusSquare}
                      alt="minus"
                      onClick={(e) => handleQuantityChange(0, item, e)}
                    />
                  </div>
                  <div>
                    <img
                      className="cart-product-photo"
                      src={item.photo}
                      alt="product-photo"
                    />
                  </div>
                </li>
              </React.Fragment>
            ))}
        </ul>
        {propsebi.cartItemsArray.length > 0 && (
          <div className="total-amount">
            <span>Total</span>
            <span>${propsebi.totalAmount.toFixed(2)}</span>
          </div>
        )}
        <NavLink to={"/bag"}>VIEW BAG</NavLink>
        <NavLink to={"/checkout"}>CHECK OUT</NavLink>
      </div>
    </React.Fragment>
  );
};

export default CartModal;
