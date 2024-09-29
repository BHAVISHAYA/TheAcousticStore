import React from 'react';
import { Feature_Window_View } from './Feature_Window_View';
import { Feature_Mobile_View } from './Feature_Mobile_View';
import "../styles/Features.css";


export const Features = () => {
    return (
        <>
            <div class="container-fluid features pt-4 pb-5">
                {/* <!--!   Screen Size >= 1200 --> */}
                <div class="row justify-content-center align-items-center f d-none d-xl-flex">
                    <Feature_Window_View para_1="Worldwide Shipping" para_2="Order Above $100" i_tag="fa-solid fa-truck-fast" />
                    <Feature_Window_View para_1="Easy 30 Day Returns" para_2="Back Returns In 7 Days" i_tag="fa-solid fa-rotate" />
                    <Feature_Window_View para_1="Money Back Guarantee" para_2="With In 10-Days" i_tag="fa-solid fa-hand-holding-dollar" />
                    <Feature_Window_View para_1="Easy Online Support" para_2="24/7 Any Time Support" i_tag="fa-solid fa-headset" />
                </div>

                {/* <!--!   Screen Size <= 1199 --> */}
                <div class="row d-flex d-xl-none">
                    <Feature_Mobile_View para_1="Worldwide Shipping" para_2="Order Above $100" i_tag="fa-solid fa-truck-fast" />
                    <Feature_Mobile_View para_1="Easy 30 Day Returns" para_2="Back Returns In 7 Days" i_tag="fa-solid fa-rotate" />
                </div>
                <div class="row d-flex d-xl-none">
                    <Feature_Mobile_View para_1="Money Back Guarantee" para_2="With In 10-Days" i_tag="fa-solid fa-hand-holding-dollar" />
                    <Feature_Mobile_View para_1="Easy Online Support" para_2="24/7 Any Time Support" i_tag="fa-solid fa-headset" />
                </div>
            </div>
        </>
    )
}
