import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer.jsx";

const CartContext = createContext();

const getLocalStorageData = () => {
    let localCartData = localStorage.getItem("myCart");
    if (!localCartData) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
}

const initialState = {
    cart: getLocalStorageData(), 
    total_item: 0,
    total_price: 0,
    shipping_fee: 5000,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type : "ADD_TO_CART", payload : { id, color, amount, product } });
    };

    const setIncrease = (id) => {
        dispatch({ type : "SET_INCREASE", payload : id });
    }

    const setDecrease = (id) => {
        dispatch({ type : "SET_DECREASE", payload : id });
    }

    const removeItem = (id) => {
        dispatch({ type : "REMOVE_ITEM", payload : id });
    };

    const clearCart = () => {
        dispatch({ type : "CLEAR_CART" });
    }

    //* Adding data to localStorage 
    useEffect(() => {
        dispatch({ type : "CART_TOTAL_ITEM" });
        dispatch({ type : "CART_TOTAL_PRICE" });
        localStorage.setItem("myCart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setIncrease, setDecrease }}>
            { children }
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };