import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/About.css";
import { useProductContext } from '../context/productcontex';

export const About = () => {

    console.log("This is about page");

    return (
        <>
            {/* <Nav /> */}
            <div className="container-fluid jost about py-5 mt-5">
                <div className="row text-center justify-content-center jost pt-3">
                    <div className="col-11 justify-content-center py-3">
                        <p>A FEW WORDS</p>
                        <h1>ABOUT US</h1>
                    </div>

                    <div className="col-md-8 col-11 justify-content-center pb-4">
                        <h3>
                            Acoustic Store isn't just another online shopping platform. The name may evoke thoughts of music, but it symbolizes clarity, simplicity, and the joy of discovering unique products. 
                        </h3>
                    </div>

                    <div className="col-11 justify-content-center pt-4 pb-4">
                        <h1>Our Mission & Values</h1>
                        <div className="row justify-content-evenly align-items-stretch pt-5">
                            <div className="col-md-4">
                                <h2>Our Mission</h2>
                                <h3>
                                    At Acoustic Store, we aim to offer products that bring both style and functionality into your life. 
                                    We ensure every product meets our high standards of quality.
                                </h3>
                            </div>
                            <div className="col-md-5 pt-md-0 pt-5">
                                <h2>Our Values</h2>
                                <h3> <span>Quality :</span> Only the best for our customers. </h3>
                                <h3> <span>Customer-first :</span> We value your experience above all else. </h3>
                                <h3> <span>Sustainability :</span> Eco-friendly products whenever possible. </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-11 justify-content-center py-4">
                        <h1>Our Journey</h1>
                        <div className="row justify-content-center">
                            <div className="col-md-6 pt-4">
                                <h3>
                                    Acoustic Store was born from a passion for simplifying the online shopping experience.
                                    From a small vision, we have grown into diverse platform catering to customers across multiple categories.
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-11 justify-content-center py-4">
                        <h1>What Our Customers Say</h1>
                        <div className="row justify-content-center pt-5">
                            <div className="col-9 col-md-6 py-4 customer">
                                <h3>
                                    "Acoustic Store never disappoints! The product quality is amazing, and I love the easy returns process."
                                    <br />
                                    -------A Happy Customer 
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-11 justify-content-center pt-4">
                        <h1 style={{textDecorationLine : "none"}}>Ready to Shop ?</h1>
                        <h3 className='pb-4'>Browse our collection and enjoy seamless shopping experience!</h3>
                        <NavLink to="/products" className="showNow">Shop Now</NavLink>
                    </div>
                </div>
            </div>
            {/* <div style={{backgroundColor : "white;" , height : "1px"}}></div> */}
            {/* <Footer /> */}
        </>
    )
}
