import React, { useState } from 'react';
import "../styles/Nav.css";
import { WindowNav } from './WindowNav';
import { MobileNav } from './MobileNav';

export const Nav = () => {
    
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
        console.log(toggle);
    }

    return (
        <>
            <div className="container-fluid navBar jost py-3">
                <div className="row justify-content-center align-items-center">
                    <div className="col-8 px-3">
                        <h1 className="p-0 m-0">Acoustic Store</h1>
                    </div>
                    <div className="col-4 text-end">
                        <WindowNav />
                        <i className={`fa-solid px-2 ${toggle ? 'fa-bars' : 'fa-xmark'}`} onClick={handleToggle}></i>
                        {
                            toggle === false && 
                            <MobileNav toggle={toggle} setToggle={setToggle}  />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
