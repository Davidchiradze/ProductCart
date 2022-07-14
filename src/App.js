import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import CategorySection from "./Components/UI/CategorySection";
import Header from "./Components/UI/Header";
import Pdp from "./Components/UI/Pdp";
import image from "./assets/Image.svg";
import image2 from "./assets/Image2.svg";
import LandingPage from "./LandingPage/Landingpage";
import PageOutLine from "./Components/UI/PageOutLine";
const productArray = [
  {
    photo: image,
    title: "Apollo Running Short",
    price: "50.00",
    id: "1",
    category: "MEN",
  },
  {
    photo: image2,
    title: "Apollo Running Short",
    price: "50.00",
    id: "2",
    category: "WOMEN",
  },
  {
    photo: image2,
    title: "Apollo Running Short",
    price: "50.00",
    id: "3",
    category: "MEN",
  },
  {
    photo: image,
    title: "Apollo Running Short",
    price: "50.00",
    id: "4",
    category: "WOMEN",
  },
  {
    photo: image,
    title: "Apollo Running Short",
    price: "50.00",
    id: "5",
    category: "WOMEN",
  },
  {
    photo: image,
    title: "Apollo Running Short",
    price: "50.00",
    id: "6",
    category: "WOMEN",
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsArray, setCartItemsArray] = useState([]);
  const [cartProductQuantity, setCartProductQuantity] = useState({});
  const [chosenSize, setChosenSize] = useState("S");
  const [totalAmount, setTotalAmount] = useState(0);

  const summingTotalAmount = (price) => {
    setTotalAmount((prev) => Number(prev) + Number(price));
  };

  const addToCart = (id, e, size) => {
    e?.preventDefault();
    // id=id+'-'+size;
    console.log(size);
    const shouldadd = cartItemsArray.find(
      (item1) => item1.id === id + "-" + size
    );
    let itemToAdd;

    if (!shouldadd)
      itemToAdd = Object.assign(
        {},
        productArray.find((item1) => item1.id === id)
      );

    setCartProductQuantity((prevQuantity) => ({
      ...prevQuantity,
      [id + "-" + size]: prevQuantity[id + "-" + size]
        ? prevQuantity[id + "-" + size] + 1
        : 1,
    }));

    if (itemToAdd) itemToAdd.id = itemToAdd.id + "-" + size;

    setCartItemsArray((prevArr) =>
      !shouldadd ? [...prevArr, itemToAdd] : prevArr
    );
    summingTotalAmount(shouldadd?.price || itemToAdd.price);
  };

  const propsebi = {
    setCartItemsArray,
    cartItemsAmount: cartItemsArray.length,
    cartItemsArray,
    cartProductQuantity,
    setCartProductQuantity,
    totalAmount,
    setTotalAmount,
    summingTotalAmount,
    chosenSize,
    setChosenSize,
  };

  return (
    // <Route exact path="/" element={<LandingPage />}></Route>
    //mchirdeba 2browser routi
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>

        <Route
          path="/shop"
          element={
            <React.Fragment>
              <PageOutLine {...propsebi}>
                <div>Welcome to the shopping page</div>
              </PageOutLine>
            </React.Fragment>
          }
        ></Route>
        <Route
          path="/:category"
          element={
            <PageOutLine {...propsebi}>
              <CategorySection
                addToCart={addToCart}
                productArray={productArray}
                cartItems={cartItems}
                setCartItems={setCartItems}
                cartItemsAmount={cartItemsArray.length}
                cartItemsArray={cartItemsArray}
                setCartItemsArray={setCartItemsArray}
                setCartProductQuantity={setCartProductQuantity}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
              />
            </PageOutLine>
          }
        ></Route>
        {/* <Route path="/shop/MEN" element={<div>MEN</div>}></Route> */}
        <Route
          exact
          path=":collection/item/:id"
          element={
            <PageOutLine {...propsebi}>
              <Pdp
                addToCart={addToCart}
                cartItemsArray={cartItemsArray}
                setCartItemsArray={setCartItemsArray}
                productArray={productArray}
                cartItemsAmount={cartItemsArray.length}
                cartItems={cartItems}
                setCartItems={setCartItems}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
                chosenSize={chosenSize}
                setChosenSize={setChosenSize}
              />
            </PageOutLine>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
