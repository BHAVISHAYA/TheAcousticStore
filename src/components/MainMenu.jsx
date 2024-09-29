import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cart_context.jsx';
import "../styles/Nav.css";

export const MainMenu = (props) => {

    const { screenType, toggle, setToggle } = props;
    const { total_item } = useCartContext();

    return (
        <>
            <ul className={screenType === "Window" ? "menu" : "mobileMenu"} >
                <li>
                    <NavLink className={screenType === "Window" ? "menuItem" : "mobileMenuItem"} to="/" onClick={() => {setToggle(!toggle)}}>HOME</NavLink>
                </li>
                <li>
                    <NavLink className={screenType === "Window" ? "menuItem" : "mobileMenuItem"} to="/about" onClick={() => {setToggle(!toggle)}}>ABOUT</NavLink> 
                </li>
                <li>
                    <NavLink className={screenType === "Window" ? "menuItem" : "mobileMenuItem"} to="/products" onClick={() => {setToggle(!toggle)}}>PRODUCTS</NavLink>
                </li>
                <li>
                    <NavLink className={screenType === "Window" ? "menuItem" : "mobileMenuItem"} to="/contact" onClick={() => {setToggle(!toggle)}}>CONTACT</NavLink>
                </li>
                <li>
                    <NavLink className={screenType === "Window" ? "menuItem" : "mobileMenuItem"} to="/cart" onClick={() => {setToggle(!toggle)}}>
                    <i className="fa-solid fa-cart-shopping">
                        <span className="cartValue"> { total_item } </span>
                    </i>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={screenType === "Window" ? "menuItem_button" : "mobileMenuItem_button"} to="/login" onClick={() => {setToggle(!toggle)}}>
                        <button> LogIn </button>
                    </NavLink>
                </li>
            </ul>
        </>
    )
}
