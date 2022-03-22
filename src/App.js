import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import  {useState} from 'react';
import "./App.css";
import CategorySection from "./Components/UI/CategorySection";
import Header from "./Components/UI/Header";
import Pdp from "./Components/UI/Pdp";
import image from "./assets/Image.svg";


const productArray = [
  {
    photo: image,
    title: "Apollo Running Short",
    price: "$50.00",
    id: '1'
  },
  {
    photo: image,
    title: "Apollo Running Short",
    price: "$50.00",
    id: '1'
  },
  {
    photo: image,
    title: "Apollo Running Short",
    price: "$50.00",
    id: '1'
  },
  {
    photo: image,
    title: "Apollo Running Short",
    price: "$50.00",
    id: '1'
  },
  {
    photo: image,
    title: "Apollo Running Short",
    price: "$50.00",
    id: '1'
  },
  {
      photo: image,
      title: "Apollo Running Short",
      price: "$50.00",
      id: '1'
    },
];


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsAmount, setCartItemsAmount] = useState(0);
  // const [ricxvi, setRicxvi] = useState();

  return (
    <BrowserRouter>
      <div className="App">
        <Header cartItemsAmount={cartItemsAmount}></Header>
      <Routes>
        <Route exact path="/" element={<Navigate to="/WOMEN" />}></Route>
        <Route exact path=":collection/item/:id" element={<Pdp
        productArray={productArray}
        cartItemsAmount={cartItemsAmount}      
        cartItems={cartItems} 
        setCartItems={setCartItems}
        setCartItemsAmount={setCartItemsAmount}/>}></Route>
        <Route path="*" element={<CategorySection  
        productArray={productArray} 
        cartItems={cartItems} 
        setCartItems={setCartItems}
        cartItemsAmount={cartItemsAmount} 
        setCartItemsAmount={setCartItemsAmount}
         />}></Route>
      </Routes>

        
      </div>

    </BrowserRouter>
  );
}

export default App;
