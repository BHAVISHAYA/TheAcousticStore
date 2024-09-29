import React from 'react';
import "../styles/Cart.css";
import { CartItems } from './CartItems';
import { NavLink } from 'react-router-dom';
import FormatPrice from "../Helpers/FormatPrice.jsx";
import { useCartContext } from '../context/cart_context';


export const Cart = () => {

    console.log("Cart Page");

    const { cart, clearCart, total_price, shipping_fee } = useCartContext();

    if(cart.length === 0) {
        return (
            <div className='container-fluid py-5 mt-5 cartPage'>
                <div className="row text-center align-items-center justify-content-center">
                    <div className="col-11 d-grid justify-content-center align-items-center" style={{height : "80vh"}}>
                        <p style={{fontSize : "4rem", color : "#F16477"}}>
                            Your Cart Is Empty
                            <br />
                            <NavLink to="/products" style={{fontSize : "2rem"}}>
                                <button className="shoppingBtn"> Continue Shopping </button>
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid py-5 mt-5 cartPage">
            <div className="row justify-content-center align-items-center">
                <h1>CART</h1>
                <div className="col-11 mt-5 pt-2 cartPropsHeading">
                    <div className="row text-center">
                        <div className="col-7 col-md-3">
                            <p>Product</p>
                        </div>
                        <div className="col-3 d-none d-md-block">
                            <p>Price</p>
                        </div>
                        <div className="col-5 col-md-3">
                            <p>Quantity</p>
                        </div>
                        <div className="col-3 d-none d-md-block">
                            <p>Sub-Total</p>
                        </div>
                    </div>
                </div>
                {
                    cart.map((currCartItem) => {
                        console.log(currCartItem);
                        return <CartItems key={currCartItem.id} {...currCartItem} />
                    })
                }
                <div className="col-11 pt-4">
                    <div className="row cartBtns align-items-center">
                        <div className="col-6 text-start">
                            <NavLink to="/products">
                                <button>
                                    Continue Shopping
                                </button>
                            </NavLink>
                        </div>
                        <div className="col-6 text-end">
                            <button onClick={clearCart} >Clear Cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-11 pt-5">
                    <div className="row cartTotals">
                        <div className="col-12 offset-md-9 col-md-3" style={{border : "0.1px solid #F16477", backgroundColor : "rgb(241, 224, 224)"}}>
                        <h2 className='px-3 py-2'>Cart Total</h2>
                            <div className="row px-3" style={{borderTop : "0.1px solid #F16477"}}>
                                <div className="col-12 totalStyle py-4" style={{borderBottom : "0.1px solid #F16477"}}>
                                    Subtotal : <FormatPrice price={total_price} />
                                </div>
                                <div className="col-12 totalStyle py-4" style={{borderBottom : "0.1px solid #F16477"}}>
                                    Shipping Fee : <FormatPrice price={shipping_fee} />
                                </div>
                                <div className="col-12 totalStyle py-4">
                                    Order Total : <FormatPrice price={shipping_fee + total_price} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}