import React from 'react';
import { Characters } from './Characters';
import "../styles/Characteristics.css";

export const Right_Side_Char = () => {
    return (
        <>
            <div class="col-lg-3 col-11 order-3">
                <div class="row rightSidePros py-3">
                    <Characters num="4" title="Expert Guidance" desc="Our knowledgeable staff provides expert guidance, helping you choose the right gadget to meet your needs and preferences, ensuring you make informed decisions every step of the way." />

                    <Characters num="5" title="Convenient Shopping" desc="With Acoustic Store, shopping for gadgets is easy and convenient. Our user-friendly website and secure payment options ensure a seamless experience from browsing to checkout, all from the comfort of your home." />

                    <Characters num="6" title="Excellent Service" desc="Acoustic Store is committed to providing excellent service to our customers. From prompt assistance with inquiries to efficient handling of orders and deliveries, we prioritize your satisfaction every step of the way." />
                </div>
            </div>
        </>
    )
}
