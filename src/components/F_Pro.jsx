import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/FeatureProducts.css";

export const F_Pro = (props) => {
    
    const { image, id } = props;

    return (
        <> 
            <div className="col-lg-3 col-11 laptop text-center text-md-start mb-4">
                <div className="row justify-content-center align-items-center">
                <div className="col-md-6 mb-4">
                    <p>NEW YEAR SALE</p>
                    <p className="discount">Get An Extra 18% Off</p>
                    <NavLink to={`./singleproduct/${id}`}><button> SHOP NOW </button> </NavLink>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={image} alt="Laptop" />
                </div>
                </div>
            </div>
        </>
    )
}
