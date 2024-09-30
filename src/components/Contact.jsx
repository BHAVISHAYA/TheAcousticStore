import React from 'react';
import "../styles/Contact.css";
import { useAuth0 } from '@auth0/auth0-react';

export const Contact = () => {

    const { isAuthenticated, user } = useAuth0();

    return (
        <>
            <div className="container-fluid contact jost py-5 mt-5">
                <div className="row justify-content-evenly jost pt-3">
                    <div className="col-11 text-center justify-content-center py-3">
                        <p>GET IN TOUCH</p>
                        <h1>CONTACT</h1>
                    </div>

                    <div className="col-12 pb-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.188105564548!2d74.70007227465516!3d26.44966487983799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be53a85e1c407%3A0xa7fe162fe30ea33!2sGovernment%20Engineering%20College%2C%20Ajmer!5e0!3m2!1sen!2sin!4v1726135376799!5m2!1sen!2sin" width="100%" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="col-md-5 col-11">
                        <h1>LET'S TALK</h1>
                        <h5>We're here to assist you in every way possible, so don't hesitate to reach out with any questions or feedback.</h5>
                        <br />
                        <form action="https://formspree.io/f/xqazoplq" method='POST' className='form-group'>
                            <label htmlFor="">First Name <span>*</span> </label>
                            <input type="text" className='form-control' name='FirstName' required autoComplete='off' placeholder="Type your first name" value={isAuthenticated ? user.nickname : ""} />
                            <br />
                            <label htmlFor="">Last Name <span>*</span> </label>
                            <input type="text" className='form-control' name='LastName' required autoComplete='off' placeholder="Type your last name" value={isAuthenticated ? user.nickname : ""} />
                            <br />
                            <label htmlFor="">Message</label>
                            <textarea name="Message" id="Message" placeholder='Enter your message' className='form-control'></textarea>
                            <br />
                            <input type="submit" className='myBtn' />
                        </form>
                    </div>
                    <div className="col-md-5 col-11 pt-5">
                        <div className="row">
                            <div className="col-12 py-4">
                                <i className="fa-solid fa-location-dot"></i>
                                <h2>ADDRESS</h2>
                                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                            </div>
                            <div style={{height : "2px", backgroundColor : "#F16477"}}></div>
                            <div className="col-12 pt-5">
                                <div className="row">
                                    <div className="col-md-6">
                                        <i className="fa-solid fa-envelope"></i>
                                        <h2>EMAIL</h2>
                                        <p>hello@example.com</p>
                                    </div>
                                    <div className="col-md-6">
                                        <i className="fa-solid fa-phone"></i>
                                        <h2>PHONE</h2>
                                        <p>(405) 555-0128</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}
