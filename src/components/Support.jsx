import React from 'react';
import "../styles/SingleProduct.css";

export const Support = () => {
    return (
        <>
            <div className="row justify-content-center align-items-start text-center pb-1">
                <div className="col-lg-3 col-sm-6 col-6">
                    <i class="fa-solid fa-truck-fast proIcons mb-1 mx-3"></i>
                    <p>Free Delivery</p>
                </div>
                <div className="col-lg-3 col-sm-6 col-6">
                    <i className="fa-solid fa-rotate proIcons mb-1"></i>
                    <p>30 Days Replacement</p>
                </div>
                <div className="col-lg-3 col-sm-6 col-6">
                    <i className="fa-solid fa-hand-holding-dollar proIcons mb-1"></i>
                    <p>Money Back Guarantee</p>
                </div>
                <div className="col-lg-3 col-sm-6 col-6">
                    <i className="fa-solid fa-headset proIcons mb-1"></i>
                    <p>Easy Customer Support</p>
                </div>
                <div className='col-12' style={{height : "1px", backgroundColor : "black", marginTop : "-10px", width : "98%"}}></div>
            </div>
        </>
    )
}
