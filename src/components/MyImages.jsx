import React, { useState } from 'react';
import "../styles/SingleProduct.css";

export const MyImages = ({ imgs = [{ url : "" }] }) => {
    
    const [showImage, setShowImage] = useState(0);

    return (
        <>
            <div className="row align-items-center justify-content-center myImages">
                <div className="col-4">
                    <div className="row flex-column text-center">
                        {
                            imgs.map((currImage, index) => {
                                return (
                                    <div className="col-3 w-100 py-1" key={index} onClick={() => {setShowImage(index)}}>
                                        <img className='img-fluid' src={currImage.url} alt={currImage.filename} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="col-8">
                    <img className='img-fluid' src={imgs[showImage].url} alt={imgs[showImage].filename} />
                </div>
            </div>
        </>
    )
}
