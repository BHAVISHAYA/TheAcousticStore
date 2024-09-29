import React from 'react';
import { Left_Side_Char } from './Left_Side_Char';
import { Right_Side_Char } from './Right_Side_Char';
import "../styles/Characteristics.css";

export const Characteristics = () => {
    return (
        <>
            <div className="container-fluid prosPage pt-5">

                {/* Heading */}
                <div class="row">
                    <h1 class="jost text-center">Why Choose Acoustic Store</h1>
                </div>


                <div class="row justify-content-around align-items-center py-4">
                    
                    <Left_Side_Char />
                    
                    <div className="col-3 order-lg-2 order-1 centerImage">
                        <img className="img-fluid" src="/Images/ecompost.png" alt="" />
                    </div>
                    
                    <Right_Side_Char />
                    
                </div>
            </div>
        </>
    )
}
