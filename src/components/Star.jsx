import React from 'react';
import "../styles/SingleProduct.css";

export const Star = ({ stars, reviews }) => {
    
    const ratingStar = Array.from({ length : 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    stars >= index + 1 
                    ? <i className="fa-solid fa-star" style={{color : "#FFC508"}}></i> 
                    : stars >= number ? <i class="fa-solid fa-star-half-stroke" style={{color : "#FFC508"}}></i> 
                    : <i class="fa-regular fa-star" style={{color : "#FFC508"}}></i> 
                }
            </span>
        )
    });

    return (
        <>
            {ratingStar}
            <p> {reviews} customer reviews </p>
        </>
    )
}
