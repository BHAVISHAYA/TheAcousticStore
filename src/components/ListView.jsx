import React from 'react';
import "../styles/Products.css";
import FormatPrice from '../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

export const ListView = ({ products }) => {
    return (
        <>
            <div className="container-fluid listView pt-5">
                <div className="row justify-content-evenly">
                    {
                        products.map((currProduct) => {
                            return (
                                <div className='col-11 my-4 listItem' key={currProduct.id}>
                                    <div className="row align-items-center">
                                        <div className="col-md-6 position-relative">
                                            <span className='cate'> {currProduct.category} </span>
                                            <img className='img-fluid p-md-3' src={currProduct.image} alt={currProduct.name} />
                                        </div>
                                        <div className="col-md-6 p-4">
                                            <p className='productName'> {currProduct.name} </p>
                                            <p> <FormatPrice price={currProduct.price} /> </p>
                                            <p> { currProduct.description.slice(0, 99) }....</p>
                                            <NavLink to={`/singleproduct/${currProduct.id}`}>
                                                <button className='mt-3'>Read More</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
