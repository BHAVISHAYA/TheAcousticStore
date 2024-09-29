import React from 'react';
import { NavLink } from 'react-router-dom';

export const PageNavigation = ({title}) => {
    return (
        <>
            <div className="container-fluid pageNavigation">
                <NavLink to="/">HOME</NavLink> / {title}
            </div>
        </>
    )
}
