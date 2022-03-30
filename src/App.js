import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import React, {useState} from 'react';
import "./App.css";
import CategorySection from "./Components/UI/CategorySection";
import Header from "./Components/UI/Header";
import Pdp from "./Components/UI/Pdp";
import image from "./assets/Image.svg";
import image2 from './assets/Image2.svg'


const productArray = [
  {
    photo: image,
    title: "Apollo Running Short",
    price: "50.00",
    id: '1'
  },
  {
    photo: image2,
    title: "Apollo Running Short",
    price: "50.00",
    id: '2'
  },
  {
    photo: image2,
    title: "Apollo Running Short",
    price: "50.00",
    id: '3'
  },
  {
    photo: image,
    title: "Apollo Running Short",
    price: "50.00",
    id: '4'
  },
  {
    photo: image,
    title: "Apollo Running Short",
    price: "50.00",
    id: '5'
  },
  {
      photo: image,
      title: "Apollo Running Short",
      price: "50.00",
      id: '6'
    },
];


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsArray,setCartItemsArray] = useState([]);
  const [cartProductQuantity, setCartProductQuantity] = useState({});
  const [totalAmount,setTotalAmount] = useState(0);



const summingTotalAmount =(price)=>{
      setTotalAmount(prev=> Number(prev) + Number(price))   
}

  const addToCart = (id, e) => {
    e?.preventDefault();

    const shouldadd = cartItemsArray.find(item1 => item1.id === id);
    let itemToAdd

    if (!shouldadd) itemToAdd = productArray.find(item1 => item1.id === id)

    setCartProductQuantity((prevQuantity) => ({
      ...prevQuantity,
      [id]: prevQuantity[id] ? prevQuantity[id] + 1 : 1,
    }));

    setCartItemsArray((prevArr) => !shouldadd ? [...prevArr, itemToAdd] : prevArr) 
    summingTotalAmount(shouldadd?.price || itemToAdd.price);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header
        setCartItemsArray={setCartItemsArray}
         cartItemsAmount={cartItemsArray.length}
         cartItemsArray={cartItemsArray}
         cartProductQuantity={cartProductQuantity}
         setCartProductQuantity={setCartProductQuantity}
         totalAmount={totalAmount}
         setTotalAmount={setTotalAmount}
         summingTotalAmount={summingTotalAmount}
         >
         </Header>
      <Routes>
        <Route exact path="/" element={<Navigate to="/WOMEN" />}></Route>
        <Route exact path=":collection/item/:id" element={<Pdp
        addToCart={addToCart}
        cartItemsArray={cartItemsArray}
        setCartItemsArray={setCartItemsArray}
        productArray={productArray}
        cartItemsAmount={cartItemsArray.length}      
        cartItems={cartItems} 
        setCartItems={setCartItems}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        />}></Route>
        <Route path="*" element={<CategorySection  
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
         />}></Route>
      </Routes>

        
      </div>

    </BrowserRouter>
  );
}

export default App;
