import React from 'react';
import "../styles/FeatureProducts.css";
import { F_Pro } from './F_Pro';
import { useProductContext } from '../context/productcontex';

export const FeatureProducts = () => {

    const { isLoading, featureProducts } = useProductContext();

    if(isLoading) {
        return (
            <>
                <h1 className='text-center py-5 my-5'>.....Loading.....</h1>
            </>
        );
    }

    return (
        <>
            <div className="container-fluid products jost">
                <div className="row justify-content-around align-items-center py-5">
                    <F_Pro image="/Images/iphone.png" id="thapaserialnoa" /> 
                    <F_Pro image="/Images/heroImage.png" id="thapaserialnoh" />
                    <F_Pro image="/Images/watch.png" id="thapaserialnok" />
                </div>
            </div>
        </>
    )
}
