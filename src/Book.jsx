import './Book.scss';
import { useState } from 'react';
import Header from './Header';
import App from './App';
export default function Book({id, title, image, addItemToCart, removeItemFromCart}) {
    const [amountInCart, setAomountInCart] = useState(0)

    const addToCart = () => {
        setAomountInCart(amountInCart + 1)
        addItemToCart(id)
    }

    const removeFromCart = () => {
         setAomountInCart(Math.max(0, amountInCart - 1))
         removeItemFromCart(id)
    }

    return (
        
        <>  
            <li className="book">
                <img src= {image} alt="" /> 
                { title }
                <div className="book_in-cart">
                <button onClick={addToCart}>+</button>
                {amountInCart} 
                <button onClick={removeFromCart}>-</button>
                </div>
            </li>
        </>
    )

}