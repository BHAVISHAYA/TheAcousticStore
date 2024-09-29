import React from 'react';
import "../styles/Footer.css";

export const Footer = () => {
    return (
        <>
            <div className="container-fluid footer jost py-5 px-4">
                <div className="row justify-content-between">
                    <div className="col-lg-4 col-12 pb-4 pt-lg-0">
                        <h1>Acoustic Store</h1>
                        <p className="pb-3">
                            Welcome to Acoustic EcomStore, your ultimate destination for cutting-edge gadgets!
                        </p>
                        <img
                            className="imf-fluid"
                            src="https://i.postimg.cc/Nj9dgJ98/cards.png"
                            alt="Cards"
                        />
                    </div>

                    <div className="col-lg-2 col-md-3 col-sm-6 col-12 py-4 py-lg-0">
                        <ul>
                            <li><h3>SHOPPING</h3></li>
                            <li><a href="#">Computer Store</a></li>
                            <li><a href="#">Laptop Store</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Sales & Discount</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 col-sm-6 col-12 py-4 py-lg-0">
                        <ul>
                            <li><h3>EXPERIENCE</h3></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Payment Method</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Return and Exchange</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-5 col-12 pt-4 pt-lg-0">
                        <h3>NEWSLETTER</h3>
                        <p>Be the first to know about new arrivals, sales & promos!</p>
                        <input class="w-100" type="text" placeholder="Your Email" />
                        {/* <button>Subscribe</button> */}
                    </div>
                </div>
            </div>

            <div className="container-fluid author pt-4 pb-3">
                <div className="row text-center">
                    <h6 style={{fontWeight : "700"}}>✨❤️Design and Code by BHAVISHAYA KHANDELWAL❤️✨</h6>
                </div>
            </div>
        </>
    )
}
