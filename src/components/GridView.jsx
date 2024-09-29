import React from 'react';
import { Product } from './Product';
import "../styles/Products.css";

export const GridView = ({products}) => {
    return (
        <>
            <div className="container-fluid gridView pt-5">
                <div className="row justify-content-evenly">
                    {
                        products.map((currEle) => {
                            return <Product key={currEle.id} {...currEle} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
