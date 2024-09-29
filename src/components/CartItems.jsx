import React, { useState } from 'react';
import FormatPrice from "../Helpers/FormatPrice.jsx";
import { CartAmountToggle } from "../components/CartAmountToggle.jsx";
import { useCartContext } from '../context/cart_context.jsx';
import "../styles/Cart.css";

export const CartItems = ({ id, name, image, color, amount, price, max }) => {
    console.log("Cart Item Page");
    const { removeItem, setIncrease, setDecrease } = useCartContext();

    return (
        <>
            <div className="col-11 cartItems py-3">
                <div className="row align-items-baseline">
                    <div className="col-7 col-md-3">
                        <div className="row align-items-center">
                            <div className="col-2 mx-0 px-0 text-center">
                                <button className='removeItemFromCart' onClick={() => removeItem(id)}>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                            <div className="col-5 text-center">
                                <img className='img-fluid cartProductImage' src={image} alt={id} />
                            </div>
                            <div className="col-5">
                                <p className='cartProductName mt-3'> { name } </p>
                                <p className='cartProductName'> Color : <span className='cartProductColor' style={{backgroundColor : color, color : color}}>.</span> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 d-none d-md-block text-center">
                        <p> <FormatPrice price={price} />  </p>
                    </div>
                    <div className="col-5 col-md-3 text-center">
                        <CartAmountToggle 
                            amount={amount} 
                            setIncrease={() => setIncrease(id)}
                            setDecrease={() => setDecrease(id)} 
                        />
                    </div>
                    <div className="col-3 d-none d-md-block text-center">
                        <p> <FormatPrice price={price * amount} />  </p>
                    </div>
                </div>
            </div>
        </>
    )
}
