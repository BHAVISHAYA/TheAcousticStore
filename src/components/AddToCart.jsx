import React, { useState } from 'react';
import { CartAmountToggle } from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import "../styles/SingleProduct.css";
import { useCartContext } from '../context/cart_context';

export const AddToCart = ({ product }) => {

    console.log("This is ADd To Cart");

    const { addToCart } = useCartContext();

    const { id, colors, stock } = product;

    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

    return (
        <>
            <span>
                Colors : 
                {
                    colors.map((currColor, index) => {
                        return (
                            <button 
                                key={index}
                                className={`colorBtn d-inline-block ${color === currColor ? "activeBackground" : "blurBackground"}`}  
                                style={{backgroundColor : `${currColor}`}}
                                onClick={() => {setColor(currColor)}}
                            >
                                { color === currColor ? <i className="fa-solid fa-check"></i> : <p style={{color : currColor}}>.</p> }
                            </button>
                        );
                    })
                }
            </span>
            <CartAmountToggle 
                amount={amount} 
                setIncrease={setIncrease} 
                setDecrease={setDecrease} 
            />
            <NavLink 
                to="/cart"
                onClick={ () => addToCart(id, color, amount, product) }
            >
                <button className="finalCartBtn">Add To Cart</button>
            </NavLink>
        </>
    )
}
