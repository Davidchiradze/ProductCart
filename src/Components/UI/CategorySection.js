import "./CategorySection.scss";
import React from "react";
import GreenCart from "../../assets/GreenCart.svg";
import { NavLink } from "react-router-dom";

const CategorySection = ({
  productArray,
  addToCart
}) => {


  return (
    <section className="section">
      <h2>Category name</h2>
      <ul>
        {productArray.map((item, index) => (
          <div className="product-list" key={index}>
            <NavLink
              to={`${window.location.pathname}/item/${item.id}`}
              className="navLink"
            >
              <img className="product-image" src={item.photo} alt="img" />
              <div className="product-description">
                <p>{item.title}</p>
                <span>{item.price}</span>
                <img
                  className="greencart"
                  src={GreenCart}
                  alt="GrenCart"
                  onClick={(e,size) => addToCart(item.id,e,size='M')}
                />
              </div>
            </NavLink>
          </div>
        ))}{" "}
      </ul>
    </section>
  );
};

export default CategorySection;