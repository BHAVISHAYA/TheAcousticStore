import React from 'react';
import { Characters } from './Characters';
import "../styles/Characteristics.css";

export const Left_Side_Char = () => {
    return (
        <>
            <div class="col-lg-3 col-11 order-lg-1 order-2">
                <div class="row leftSidePros py-3 text-end">
                    <Characters num="1" title="Wide Selection" desc="Acoustic Store offers a diverse range of gadgets, from smartphones to smart home devices, ensuring you find what you need to elevate your lifestyle and meet your tech requirements." />
                    
                    <Characters num="2" title="Quality Assurance" desc="Every gadget at Acoustic Store undergoes rigorous quality checks, guaranteeing reliability and performance, so you can shop with confidence knowing you're getting the best." />
                    
                    <Characters num="3" title="Competitive Prices" desc="Enjoy great value with Acoustic Store's competitive prices on high-quality gadgets, making top-of-the-line technology accessible to all without compromising on quality or performance." />
                </div>
            </div>
        </>
    )
}
