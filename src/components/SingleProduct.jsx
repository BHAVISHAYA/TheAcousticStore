import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/productcontex';
import { PageNavigation } from './PageNavigation';
import FormatPrice from '../Helpers/FormatPrice';
import { Support } from './Support';
import { MyImages } from './MyImages';
import { Star } from './Star';
import { AddToCart } from './AddToCart';
import "../styles/SingleProduct.css";

const API = "https://api.pujakaitem.com/api/products";

export const SingleProduct = () => {
    
    const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
    const { id } = useParams();
    const { id : alias,
        name, 
        company, 
        price, 
        description, 
        category, 
        stock,
        stars, 
        reviews,
        image,  
    } = singleProduct;

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    }, [])

    if(isSingleLoading) {
        return (
            <> 
                <div className="container-fluid jost" style={{height : "70vh"}}>
                    <div className="row text-center justify-content-center align-items-center">
                        <h1>............LOADING........</h1>
                    </div>
                </div>
            </>
        );
    }
 
    return (
        <>
            <div className="container-fluid singleProductPage jost py-5 mt-5">
                <div className="row justify-content-center pt-2 justify-content-evenly align-items-center">
                    <PageNavigation title={name} className="pageNavigation" />
                    <div className="col-md-5 col-11 my-4">
                        <MyImages imgs={image} />
                    </div>
                    <div className="col-md-6 col-11 py-3" style={{boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"}}>
                        <h2> {name} </h2>
                        <Star stars={stars} reviews={reviews} />
                        <p> 
                            MRP : 
                            <del className='mx-2'>
                                <FormatPrice price={price + 250000} />
                            </del> 
                        </p> 
                        <p className='deal'>
                            Deal of the Day : 
                            <span className='mx-2'>
                                <FormatPrice price={price}/>
                            </span>
                        </p>
                        <p className='pb-2'> {description} </p>
                        <Support />
                        <p className='pt-2'>Available : <span style={{fontWeight : "600"}}> {stock > 0 ? "In Stock" : "Not Available"} </span> </p>
                        <p className='pt-2'>Brand : <span style={{fontWeight : "600", textTransform: "capitalize"}}> {company} </span> </p>
                        {stock > 0 && <AddToCart product={singleProduct} />}
                    </div>
                </div>
            </div>
        </>
    )
}
