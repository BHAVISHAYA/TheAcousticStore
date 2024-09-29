import React from 'react';
import { MainMenu } from './MainMenu';
import "../styles/Nav.css";


export const MobileNav = ({ toggle, setToggle }) => {
    return (
        <>
            <div className='mobileView row'>
                <MainMenu screenType="Mobile" toggle={toggle} setToggle={setToggle} />
            </div>
        </>
    )
}
