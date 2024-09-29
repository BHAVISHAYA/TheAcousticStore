import React from 'react';

const cartReducer = (state, action) => {
    
    if(action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;

        //* If the product is already exist in the cart with same properties, then we just need to update its value 
        let existingProduct = state.cart.find((currProduct) => currProduct.id === id + color);

        if(existingProduct) {
            let updatedProduct = state.cart.map((currItem) => {
                if(currItem.id === id + color) {
                    let newAmount = currItem.amount + amount;
                    if(newAmount >= currItem.max) {
                        newAmount = currItem.max;
                    }
                    return {
                        ...currItem, 
                        amount : newAmount,
                    };
                }
                else {
                    return currItem;
                }
            });
            return {
                ...state,
                cart : updatedProduct, 
            };
        }
        else {
            let cartProduct;
            cartProduct = {
                id : id + color, 
                name : product.name, 
                //* Both object and key are as it is so we can only write it once
                color,
                amount,  
                image : product.image[0].url, 
                price : product.price,
                max : product.stock,
            };

            return {
                ...state,
                cart : [...state.cart, cartProduct],
            };
        }
    }

    if(action.type === "SET_INCREASE") {
        let updatedProduct = state.cart.map((currItem) => {
            if(currItem.id === action.payload) {
                let incrementAmount = currItem.amount + 1;
                if(incrementAmount >= currItem.max) incrementAmount = currItem.max;
                return {
                    ...currItem,
                    amount : incrementAmount,
                };
            }
            else {
                return currItem;
            }
        });
        return {
            ...state, 
            cart : updatedProduct,
        };
    }

    if(action.type === "SET_DECREASE") {
        let updatedProduct = state.cart.map((currItem) => {
            if(currItem.id === action.payload) {
                let decremetAmount = currItem.amount - 1;
                if(decremetAmount <= 1) decremetAmount = 1;
                return {
                    ...currItem,
                    amount : decremetAmount,
                };
            }
            else {
                return currItem;
            }
        });
        return {
            ...state, 
            cart : updatedProduct,
        };
    }

    if(action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((currElement) => currElement.id !== action.payload);
        return {
            ...state,
            cart : updatedCart,
        };
    }

    if(action.type === "CLEAR_CART") {
        return {
            ...state,
            cart : [],
        };
    }

    if(action.type === "CART_TOTAL_ITEM") {
        let updatedCartValue = state.cart.reduce((initialValue, currItem) => {
            let { amount } = currItem;
            initialValue += amount;
            return initialValue;
        }, 0);

        return {
            ...state, 
            total_item : updatedCartValue,
        };
    }

    if(action.type === "CART_TOTAL_PRICE") {
        let total_price = state.cart.reduce((initialValue, currCartItem) => {
            let { price, amount } = currCartItem;
            initialValue += (price * amount);
            return initialValue;
        }, 0);
        return {
            ...state, 
            total_price : total_price,
        };
    }

    return state;
}

export default cartReducer;
