import "./CategorySection.scss";
import React from "react";
import GreenCart from "../../assets/GreenCart.svg";
import { useParams } from "react-router";

import { Link } from "react-router-dom";

const CategorySection = ({ productArray, addToCart }) => {
  const { category } = useParams();
  console.log(category);
  return (
    <section className="section">
      <h2>{category} section</h2>
      <ul>
        {productArray.map(
          (item, index) =>
            item.category === category && (
              <div className="product-list" key={index}>
                <Link
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
                      onClick={(e, size) =>
                        addToCart(item.id, e, (size = "M"), item.price)
                      }
                    />
                  </div>
                </Link>
              </div>
            )
        )}
      </ul>
    </section>
  );
};

export default CategorySection;
