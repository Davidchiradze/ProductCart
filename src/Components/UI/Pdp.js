import React, {useState} from 'react'
import { useParams } from 'react-router';
import CartModal from './CartModal';
import './Pdp.scss'

const sizes  = ['XS', 'S', 'M', 'L']

const Pdp = ({productArray,cartItems,setCartItems,setCartItemsAmount,addToCart,setCartItemsArray}) => {
    
    const { id } = useParams();
    const [chosenSize, setChosenSize] = useState('S')
    const chosenProd = productArray.find(item => item.id === id)
    // console.log(chosenProd);
    const photos = [chosenProd.photo,chosenProd.photo,chosenProd.photo];
    const [chosenPhoto, setChosenPhoto] =  useState (photos[0]);

    return (
        <React.Fragment>
            
            {/* <h2>PDP Page</h2> */}
        <div className="product-card">
            
<div className="photos">
         <div className="product-photos">
            {photos.map((item)=>(
                <img src={item} onClick={()=>  setChosenPhoto(item)}/>
            ))}
            {/* <img src={chosenProd.photo}/> */}
        </div>
        <div >
            <img className="main-photo" src={chosenPhoto}/> 
        </div>
</div>
            <div className="product-card-info">
                <h2>{chosenProd.title}</h2>
                <label>SIZE:</label>
                <ul>
                    {sizes.map(size => <li onClick={() => setChosenSize(size)} className={`size ${(size === chosenSize) ? 'active' : ''}`}>{size}</li>)}
                </ul>
                <label>PRICE:</label>
                <span>{chosenProd.price}</span>
                <button onClick={()=>addToCart(chosenProd.id)}> ADD TO CART </button>
                <p>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
            </div>
            </div>

              
        </React.Fragment>
    )
}


export default Pdp;