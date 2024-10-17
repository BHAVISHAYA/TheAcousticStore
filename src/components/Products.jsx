import React from 'react';
import { FilterSection } from './FilterSection';
import { Sort } from './Sort';
import { ProductList } from './ProductList';
import "../styles/Products.css";


export const Products = () => {
    return (
        <>
            <div className="container-fluid jost productPage mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-3 col-11 pt-3">
                        <FilterSection />
                    </div>
                    <div className="col-md-9 col-11 pt-3">
                        <div className="row justify-content-center">
                            <Sort />
                        </div>
                        <div className="row">
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
