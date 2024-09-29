import React from 'react';
import "../styles/SingleProduct.css";

export const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
    return (
        <>
            <p className='pt-4 align-items-center cartBtnStyle'>
                <button className='decrement' onClick={() => {setDecrease()}}>
                    <i className="fa-solid fa-minus"></i>
                </button>
                <button> {amount} </button>
                <button className='increment' onClick={() => {setIncrease()}}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </p>
        </>
    )
}
