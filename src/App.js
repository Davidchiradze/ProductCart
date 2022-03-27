import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import  {useState} from 'react';
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
    price: "$50.00",
    id: '1'
  },
  {
    photo: image2,
    title: "Apollo Running Short",
    price: "$50.00",
    id: '2'
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
  const [cartItemsArray,setCartItemsArray] = useState([]);
  const [cartProductQuantity, setCartProductQuantity] = useState(1);

  return (
    <BrowserRouter>
      <div className="App">
        <Header
         cartItemsAmount={cartItemsAmount}
         cartItemsArray={cartItemsArray}
         cartProductQuantity={cartProductQuantity}
         setCartProductQuantity={setCartProductQuantity}
         >
         </Header>
      <Routes>
        <Route exact path="/" element={<Navigate to="/WOMEN" />}></Route>
        <Route exact path=":collection/item/:id" element={<Pdp
        cartItemsArray={cartItemsArray}
        setCartItemsArray={setCartItemsArray}
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
        cartItemsArray={cartItemsArray}
        setCartItemsArray={setCartItemsArray}
         />}></Route>
      </Routes>

        
      </div>

    </BrowserRouter>
  );
}

export default App;
