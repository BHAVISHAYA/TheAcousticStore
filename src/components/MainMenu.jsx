import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cart_context.jsx';
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Nav.css";

export const MainMenu = (props) => {

    const { screenType, toggle, setToggle } = props;
    const { total_item } = useCartContext();
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    //* <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    //*     Log Out
    //* </button>

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
                {
                    isAuthenticated ? 
                    <li>
                        <NavLink className={screenType === "Window" ? "menuItem_button" : "mobileMenuItem_button"}>
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                LogOut
                            </button>
                        </NavLink>
                    </li> :
                    <li>
                        <NavLink className={screenType === "Window" ? "menuItem_button" : "mobileMenuItem_button"}>
                            <button onClick={() => loginWithRedirect()}>LogIn</button>
                        </NavLink>
                    </li> 
                }
                {
                    isAuthenticated && 
                    <h5 className={`mx-3 text-center ${screenType === "Window" ? "pinkColor" : "whiteColor"}`}>
                        <img src={user.picture} alt="userPicture" style={{borderRadius : "50%" ,height: "50px"}} />
                    </h5>
                }
            </ul>
        </>
    )
}
