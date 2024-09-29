import React from 'react';
import FormatPrice from '../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';
import "../styles/Products.css";

export const Product = (currEle) => {

    const { id, name, image, price, category } = currEle;
    return (
        <>
            
            <div className="col-6 col-md-3 productStyle pt-3">
                <NavLink to={`/singleproduct/${id}`}>
                    <span className='cate'> {category} </span>
                    <div className="parentImage">
                        <img className='img-fluid' src={image} alt={name} />
                    </div>
                    <div className="row justify-content-between desc">
                        <div className="col-12 col-lg-5 pt-2">
                            <p> {name} </p>
                        </div>
                        <div className="col-12 col-lg-7 text-lg-end desc_2 pt-2">
                            <p style={{color : "#F16477"}}> <FormatPrice price={price} /> </p>
                        </div>
                    </div>
                </NavLink>
            </div>
        </>
    )
}
